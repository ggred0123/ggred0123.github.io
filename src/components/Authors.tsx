import { ME, type Publication } from "@/data/profile";

export default function Authors({ pub }: { pub: Publication }) {
  const eq = pub.equalContribution ?? [];
  return (
    <p className="authors">
      {pub.authors.map((a, i) => (
        <span key={a}>
          {a === ME ? <strong>{a}</strong> : a}
          {eq.includes(a) && "*"}
          {i < pub.authors.length - 1 && ", "}
        </span>
      ))}
    </p>
  );
}
