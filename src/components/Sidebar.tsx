import { IconCompare, IconLink, IconPdf, IconText } from "./icons";
import logo from "../assets/enagram.png";

export default function Sidebar() {
  return (
    <aside className="bg-[#132450] text-white w-64 min-w-56 hidden lg:flex flex-col justify-between">
      <div>
        <div className="flex items-start px-0 py-0 border-b border-white/10">
          <div className="flex items-center gap-2 w-[110px] h-[44px] ml-6 mt-11">
            <div className="relative w-7 h-7 overflow-hidden">
              <img
                src={logo}
                alt="ENAGRAM"
                className="absolute inset-0 w-9 h-9 object-cover object-top"
              />
            </div>
            <div className="font-semibold leading-none">ENAGRAM</div>
          </div>
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
            <li className="my-1">
              <a
                className=" w-full flex items-center gap-3 px-5 py-3 bg-white text-[#132450] rounded-l-full rounded-tr-2xl rounded-br-2xl"
                href="#"
              >
                <IconCompare className="w-4 h-4" />
                <span className="font-medium">ტექსტის შედარება</span>
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
