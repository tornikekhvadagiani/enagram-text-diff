type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  fontClass?: string;
};

export default function TextInput({
  value,
  placeholder,
  onChange,
  fontClass,
}: Props) {
  return (
    <div className="rounded-lg bg-[#eaf2ff] p-0 overflow-hidden">
      <div className="flex items-center gap-2 mb-2 text-slate-600" />
      <textarea
        className={`w-full h-60 md:h-64 lg:h-72 resize-vertical outline-none px-3 py-2 text-sm bg-transparent text-slate-800 placeholder:text-slate-400 ${
          fontClass ?? ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
