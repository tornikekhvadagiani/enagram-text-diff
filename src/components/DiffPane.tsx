import type { DiffPart } from "../lib/diff";

type Props = {
  parts: DiffPart[];
  side: "left" | "right";
  fontClass?: string;
};

export default function DiffPane({ parts, side, fontClass }: Props) {
  return (
    <div className="rounded-lg border border-slate-200 bg-[#eaf2ff] p-4 min-h-[256px]">
      <div className="flex items-center gap-2 mb-2 text-slate-600"></div>
      <p
        className={`leading-7 text-slate-800 text-base whitespace-pre-wrap ${
          fontClass ?? ""
        }`}
      >
        {parts.length === 0 ? (
          <span className="text-slate-400">ტექსტი არ არის</span>
        ) : (
          parts.map((p, idx) => {
            if (p.type === "equal") return <span key={idx}>{p.text}</span>;
            if (side === "left") {
              if (p.type === "removed")
                return (
                  <span
                    key={idx}
                    className="text-[#B50022]"
                  >
                    {p.text}
                  </span>
                );
              return null;
            } else {
              if (p.type === "added")
                return (
                  <span
                    key={idx}
                    className="text-[#3EBC5E]"
                  >
                    {p.text}
                  </span>
                );
              return null;
            }
          })
        )}
      </p>
    </div>
  );
}
