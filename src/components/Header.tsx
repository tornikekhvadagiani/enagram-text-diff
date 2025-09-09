import { IconPlus, IconCompare } from "./icons";
import FontSelector from "./FontSelector";
import logo from "../assets/enagram.png";

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
      <div className="flex lg:hidden items-center justify-between px-4 py-2 bg-[#132450] text-white">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 overflow-hidden">
            <img
              src={logo}
              alt="ENAGRAM"
              className="w-8 h-8 object-cover object-top"
            />
          </div>
          <span className="text-sm font-semibold">ENAGRAM</span>
        </div>
        <button className="inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-white">
          ☰
        </button>
      </div>

      <div className="flex md:hidden max-w-[1200px] mx-auto px-3 sm:px-4 pt-4 items-center justify-center gap-2 mb-3 sm:mb-4">
        <IconCompare className="w-4 h-4 text-slate-700" />
        <div className="text-slate-700 font-semibold">ტექსტის შედარება</div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3 sm:px-4 pb-4 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 md:mt-4 lg:mt-0">
        <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 flex-wrap">
          <FontSelector
            value={fontFamily}
            onChange={onFontChange}
          />
          <label className="inline-flex items-center gap-1 sm:gap-2 text-sm text-slate-700 whitespace-nowrap">
            <input
              type="checkbox"
              className="size-4"
              checked={keepFormat}
              onChange={(e) => onKeepFormatChange(e.target.checked)}
            />
            ფორმატის შენარჩუნება
          </label>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-100 px-3 sm:px-4 py-2 text-slate-700 text-sm hover:bg-slate-200 w-full md:w-auto">
          <IconPlus className="w-4 h-4" />
          <span>ახლის გახსნა</span>
        </button>
      </div>
    </header>
  );
}
