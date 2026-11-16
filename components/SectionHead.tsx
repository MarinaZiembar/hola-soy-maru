import Reveal from "./Reveal";

type Props = { index: string; label: string; title: string; aside?: string; light?: boolean };

/** Cabecera editorial: (01) Label ———— Título grande */
export default function SectionHead({ index, label, title, aside, light = false }: Props) {
  return (
    <div className="section-head">
      <Reveal className={`section-meta ${light ? "section-meta--light" : ""}`}>
        <span className="mono">({index})</span>
        <span className="mono">{label}</span>
        <span className="section-rule" />
      </Reveal>
      <Reveal as="h2" className="section-title" delay={80}>
        {title}
      </Reveal>
      {aside && (
        <Reveal as="p" className="section-aside" delay={160}>
          {aside}
        </Reveal>
      )}
    </div>
  );
}
