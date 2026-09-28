// Carga inicial: copia el contenido actual del sitio a Sanity tal cual está.
// Es idempotente (createOrReplace con IDs fijos) y publica directamente,
// porque es el mismo contenido que ya está en producción.
import { randomUUID } from "node:crypto";
import { allBlogArticles } from "../../lib/blog-articles";
import { planDetails } from "../../lib/plan-details";
import { getClient } from "./client";

const key = () => randomUUID().slice(0, 12);
const keyed = <T extends object>(items: T[] | undefined, extra?: (item: T) => object) =>
  (items || []).map(item => ({ _key: key(), ...item, ...(extra ? extra(item) : {}) }));

const home = {
  _id: "homePage",
  _type: "homePage",
  heroEyebrow: "Medicina prepagada y seguros de salud",
  heroTitleLine1: "Tu bienestar.",
  heroTitleLine2: "Nuestra prioridad.",
  heroDescription: "Planes para ti, tu familia o tu empresa, con orientación clara para que encuentres lo que necesitas sin complicaciones.",
  heroPrimaryCta: "Encuentra tu plan",
  heroSecondaryCta: "Hablar con un asesor",
  heroClientCta: "Ya soy cliente",
  trustHighlight: "Más de 200.000",
  trustText: "personas y empresas confían en Humana",
  trustChecks: ["Recorrido personalizado", "Servicios fáciles de encontrar"],
};

const plans = planDetails.map(p => ({
  _id: `plan-${p.slug}`,
  _type: "plan",
  name: p.name,
  slug: { _type: "slug", current: p.slug },
  eyebrow: p.eyebrow,
  title: p.title,
  description: p.description,
  heroImage: p.heroImage,
  coverageTables: keyed(p.coverageTables, t => ({ _type: "coverageTable", rows: keyed(t.rows, () => ({ _type: "tableRow" })) })),
  coverageNotes: p.coverageNotes,
  mainBenefits: keyed(p.mainBenefits, () => ({ _type: "benefit" })),
  lifeInsurance: p.lifeInsurance,
  checkup: p.checkup,
  huPlus: p.huPlus,
  faqTitle: p.faqTitle,
  faqs: keyed(p.faqs, () => ({ _type: "faq" })),
}));

const posts = allBlogArticles.map(a => ({
  _id: `blog-${a.slug}`,
  _type: "blogPost",
  title: a.title,
  slug: { _type: "slug", current: a.slug },
  date: a.date,
  category: a.category,
  image: a.image,
  excerpt: a.copy,
  body: (a.body || []).map(({ type, ...rest }) => ({ _key: key(), _type: type, ...rest })),
}));

const client = getClient();
const tx = client.transaction();
const docs: Array<{ _id: string; _type: string }> = [home, ...plans, ...posts];
docs.forEach(doc => tx.createOrReplace(doc));
await tx.commit();
console.log(`Listo: Home, ${plans.length} planes y ${posts.length} artículos cargados en Sanity.`);
