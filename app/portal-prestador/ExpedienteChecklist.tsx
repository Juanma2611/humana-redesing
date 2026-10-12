"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const requiredDocs = [
  { code: "DOC-01", title: "RUC actualizado", copy: "Registro Único de Contribuyentes vigente de la institución." },
  { code: "DOC-02", title: "Permiso de funcionamiento vigente", copy: "Uno por cada sucursal que quieras incorporar al convenio." },
  { code: "DOC-03", title: "Tarifario de prestaciones", copy: "Debe presentarse en el formato que descargas desde el portal." },
  { code: "DOC-04", title: "Staff médico", copy: "También en el formato del portal. Reúne estos datos de cada profesional antes de llenarlo: Registro SENESCYT · RUC · Cédula · Especialidad médica." },
];

const optionalDocs = [
  { code: "OPC-01", title: "Póliza de responsabilidad civil", copy: "Suma respaldo a tu postulación, aunque no es requisito de ingreso." },
  { code: "OPC-02", title: "Carta de presentación", copy: "Describe tu institución, trayectoria y capacidad instalada." },
];

export function ExpedienteChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (code: string) => setChecked((current) => ({ ...current, [code]: !current[code] }));
  const requiredDone = requiredDocs.filter((doc) => checked[doc.code]).length;

  return (
    <div>
      <div className="biz-doc-counter">
        <span>Obligatorios listos</span>
        <strong>{requiredDone} / {requiredDocs.length}</strong>
      </div>

      <h3 style={{ marginTop: 32 }}>Documentos obligatorios</h3>
      <div className="biz-doc-grid">
        {requiredDocs.map((doc) => (
          <label className={checked[doc.code] ? "biz-doc-card is-checked" : "biz-doc-card"} key={doc.code}>
            <input type="checkbox" checked={!!checked[doc.code]} onChange={() => toggle(doc.code)} />
            <span className="biz-doc-check" aria-hidden="true"><Check size={14} /></span>
            <span className="biz-doc-copy"><strong>{doc.code} · {doc.title}</strong><p>{doc.copy}</p></span>
          </label>
        ))}
      </div>

      <h3 style={{ marginTop: 28 }}>Documentos opcionales</h3>
      <div className="biz-doc-grid">
        {optionalDocs.map((doc) => (
          <label className={checked[doc.code] ? "biz-doc-card is-checked" : "biz-doc-card"} key={doc.code}>
            <input type="checkbox" checked={!!checked[doc.code]} onChange={() => toggle(doc.code)} />
            <span className="biz-doc-check" aria-hidden="true"><Check size={14} /></span>
            <span className="biz-doc-copy"><strong>{doc.code} · {doc.title}</strong><p>{doc.copy}</p></span>
          </label>
        ))}
      </div>
    </div>
  );
}
