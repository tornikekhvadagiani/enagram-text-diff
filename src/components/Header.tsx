import { IconPlus } from "./icons";
import FontSelector from "./FontSelector";

type Props = {
  fontFamily: string;
  onFontChange: (v: string) => void;
  keepFormat: boolean;
  onKeepFormatChange: (v: boolean) => void;
};

export default function Header({
  fontFamily,
  onFontChange,
  keepFormat,
  onKeepFormatChange,
}: Props) {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-slate-600">
              ☰
            </button>
          </div>
          <div className="h-5 w-px bg-slate-300 mx-2 hidden " />
          <FontSelector
            value={fontFamily}
            onChange={onFontChange}
          />
          <label className="inline-flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              className="size-4"
              checked={keepFormat}
              onChange={(e) => onKeepFormatChange(e.target.checked)}
            />
            ფორმატის შენარჩუნება
          </label>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-slate-700 text-sm hover:bg-slate-200">
          <IconPlus className="w-4 h-4" />
          <span>ახლის გახსნა</span>
        </button>
      </div>
    </header>
  );
}
