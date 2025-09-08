import { IconCompare, IconLink, IconPdf, IconText } from "./icons";
import logo from "../assets/enagram.png";

export default function Sidebar() {
  return (
    <aside className="bg-[#0f2241] text-white w-64 min-w-56 hidden md:flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 px-5 py-6 border-b border-white/10">
          <div className="size-8 rounded bg-sky-400 flex items-center justify-center">
            <img
              src={logo}
              alt="ENAGRAM"
              className="w-5 h-5 object-contain"
            />
          </div>
          <div className="font-semibold">ENAGRAM</div>
        </div>
        <nav className="py-4">
          <ul className="flex flex-col">
            <li>
              <a
                className="flex items-center gap-3 px-5 py-3 hover:bg-white/10"
                href="#"
              >
                <IconText className="w-4 h-4" />
                <span>მართლმწერი</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 px-5 py-3 bg-white/10"
                href="#"
              >
                <IconCompare className="w-4 h-4" />
                <span>ტექსტის შედარება</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 px-5 py-3 hover:bg-white/10"
                href="#"
              >
                <IconLink className="w-4 h-4" />
                <span>ხმა → ტექსტი</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 px-5 py-3 hover:bg-white/10"
                href="#"
              >
                <IconLink className="w-4 h-4" />
                <span>ტექსტი → ბმა</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 px-5 py-3 hover:bg-white/10"
                href="#"
              >
                <IconPdf className="w-4 h-4" />
                <span>PDF კონვერტაცია</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10 p-4 text-sm text-white/70 flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-white/30 bg-[#9ec0ff] text-[#0f2241] text-xs font-semibold">
          თ
        </span>
        <span>თორნიკე ხვადაგიანი</span>
      </div>
    </aside>
  );
}
