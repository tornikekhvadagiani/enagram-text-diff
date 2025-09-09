import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DiffPane from "./components/DiffPane";
import CompareButton from "./components/CompareButton";
import TextInput from "./components/TextInput";
import { computeWordDiff, type DiffPart } from "./lib/diff";
import { IconArrows } from "./components/icons";
import Loader from "./components/Loader";

export default function App() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [parts, setParts] = useState<DiffPart[]>([]);
  const [fontFamily, setFontFamily] = useState<string>("font-sans");
  const [keepFormat, setKeepFormat] = useState<boolean>(false);
  const [mode, setMode] = useState<"edit" | "compare">("edit");
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const onCompare = () => {
    setLoading(true);
    setProgress(0);
    let current = 0;
    const id = setInterval(() => {
      current = Math.min(100, current + 4);
      setProgress(current);
      if (current >= 100) {
        clearInterval(id);
        setParts(computeWordDiff(left, right));
        setMode("compare");
        setLoading(false);
      }
    }, 30);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <Header
          fontFamily={fontFamily}
          onFontChange={setFontFamily}
          keepFormat={keepFormat}
          onKeepFormatChange={setKeepFormat}
        />

        <main className="max-w-[1200px] mx-auto w-full px-4 py-6">
          {loading ? (
            <div className="mt-10 flex items-center justify-center">
              <Loader progress={progress} />
            </div>
          ) : mode === "edit" ? (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 lg:gap-6 items-start">
              <TextInput
                value={left}
                onChange={(v) => setLeft(v)}
                placeholder="დაიწყე წერა..."
                fontClass={fontFamily}
              />
              <div className="flex md:hidden justify-center py-3">
                <IconArrows className="w-6 h-6 text-slate-500 rotate-90" />
              </div>
              <div className="hidden lg:flex self-stretch items-center justify-center">
                <IconArrows className="w-7 h-7 text-slate-500" />
              </div>
              <TextInput
                value={right}
                onChange={(v) => setRight(v)}
                placeholder="დაიწყე წერა..."
                fontClass={fontFamily}
              />
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 lg:gap-6 items-start">
              <DiffPane
                parts={parts}
                side="left"
                fontClass={fontFamily}
              />
              <div className="flex md:hidden justify-center py-3">
                <IconArrows className="w-6 h-6 text-slate-500 rotate-90" />
              </div>
              <div className="hidden lg:flex self-stretch items-center justify-center">
                <IconArrows className="w-7 h-7 text-slate-500" />
              </div>
              <DiffPane
                parts={parts}
                side="right"
                fontClass={fontFamily}
              />
            </div>
          )}

          <div className="my-6 flex items-center justify-center px-4">
            {mode === "edit" ? (
              <CompareButton
                onClick={onCompare}
                disabled={!left && !right}
              />
            ) : (
              <button
                onClick={() => setMode("edit")}
                className="w-full md:w-auto rounded-md bg-slate-100 px-6 py-2 text-sm text-slate-700 hover:bg-slate-200"
              >
                რედაქტირება
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
