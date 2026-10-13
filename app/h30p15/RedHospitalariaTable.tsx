"use client";

import { useState } from "react";

const hospitals = [
  { ciudad: "Quito", prestador: "Clínica Moderna", h30: "90%", p15: "No aplica" },
  { ciudad: "Quito", prestador: "Hospital Metropolitano", h30: "90%", p15: "No aplica" },
  { ciudad: "Quito", prestador: "Clínica Emergencias San Francisco", h30: "90%", p15: "90%" },
  { ciudad: "Quito", prestador: "Clínica María Auxiliadora", h30: "90%", p15: "90%" },
  { ciudad: "Quito", prestador: "Hospital Padre Carollo", h30: "90%", p15: "90%" },
  { ciudad: "Quito", prestador: "Clínica de Especialidades Tumbaco", h30: "90%", p15: "90%" },
  { ciudad: "Guayaquil", prestador: "Hospital Clínica San Francisco", h30: "90%", p15: "90%" },
  { ciudad: "Guayaquil", prestador: "Clínica Alborada", h30: "90%", p15: "90%" },
  { ciudad: "Guayaquil", prestador: "Sur Hospital", h30: "90%", p15: "90%" },
  { ciudad: "Guayaquil", prestador: "Hospital Clínica Kennedy Alborada", h30: "90%", p15: "No aplica" },
];

const cities = ["Todas", "Quito", "Guayaquil"];

function Cell({ value }: { value: string }) {
  return value === "No aplica"
    ? <span className="h30p15-pill is-na">{value}</span>
    : <span className="h30p15-pill is-ok">{value}</span>;
}

export function RedHospitalariaTable() {
  const [city, setCity] = useState("Todas");
  const rows = city === "Todas" ? hospitals : hospitals.filter((h) => h.ciudad === city);

  return (
    <div>
      <div className="h30p15-tabs" role="tablist" aria-label="Filtrar por ciudad">
        {cities.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={city === c}
            className={city === c ? "h30p15-tab is-active" : "h30p15-tab"}
            onClick={() => setCity(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="h30p15-table-wrap plan-detail-table-wrap">
        <table className="plan-detail-table h30p15-table">
          <thead><tr><th>Ciudad</th><th>Prestador</th><th>Humano 30<br />(Metrohumana 30.000)</th><th>Preciso 15<br />(Practihumana 15.000)</th></tr></thead>
          <tbody>
            {hospitals.map((h) => (
              <tr key={h.prestador} style={city !== "Todas" && h.ciudad !== city ? { display: "none" } : undefined}>
                <td>{h.ciudad}</td>
                <th scope="row">{h.prestador}</th>
                <td><Cell value={h.h30} /></td>
                <td><Cell value={h.p15} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="h30p15-cards">
        {rows.map((h) => (
          <div className="h30p15-card" key={h.prestador}>
            <span className="h30p15-card-city">{h.ciudad}</span>
            <span className="h30p15-card-name">{h.prestador}</span>
            <div className={h.h30 === "No aplica" ? "h30p15-card-row is-na" : "h30p15-card-row"}><span>Humano 30 (Metrohumana 30.000)</span><span>{h.h30}</span></div>
            <div className={h.p15 === "No aplica" ? "h30p15-card-row is-na" : "h30p15-card-row"}><span>Preciso 15 (Practihumana 15.000)</span><span>{h.p15}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
