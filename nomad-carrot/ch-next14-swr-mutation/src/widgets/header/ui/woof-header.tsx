import {ThemeButton} from "@/src/features/theme";

export default function WoofHeader() {

  return (
    <div className="flex flex-row justify-between items-center w-full p-6">
      <span className="text-4xl font-extrabold dark:text-white">
        Woof.tv
      </span>
      <ThemeButton/>
    </div>
  );
}
