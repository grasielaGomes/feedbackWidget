import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { CircleLoading } from "../loadings/CircleLoading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  handleScreenshot: (screenshot: string | null) => void;
}

export const ScreenshotButton = ({
  screenshot,
  handleScreenshot
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    handleScreenshot(base64image);
    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        className={`text-zinc-400 ${screenshot ? "border border-zinc-600" : ""} flex justify-end items-end rounded-md p-1 h-10 w-10 hover:text-zinc-100 transition-colors`}
        onClick={() => handleScreenshot(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-primary"
    >
      {isTakingScreenshot ? (
        <CircleLoading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
};
