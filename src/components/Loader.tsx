type Props = {
  progress: number;
  text?: string;
};

export default function Loader({
  progress,
  text = "Converting...Thank you For your Patience",
}: Props) {
  const pct = Math.max(0, Math.min(100, Math.round(progress)));
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm px-6 py-4 w-[320px] flex items-center gap-4">
      <div className="relative">
        <div className="w-10 h-10 rounded-full border-2 border-slate-200" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" />
      </div>
      <div className="flex-1">
        <div className="text-xs text-slate-500 mb-2">{text}</div>
        <div className="h-2 rounded bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-sky-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="text-xs text-slate-500 mt-1">{pct}%</div>
      </div>
    </div>
  );
}
