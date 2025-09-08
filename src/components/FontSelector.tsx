type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function FontSelector({ value, onChange }: Props) {
  return (
    <select
      className="w-full sm:w-56 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="georgian">ქართული</option>
      <option value="english">English</option>
    </select>
  );
}
