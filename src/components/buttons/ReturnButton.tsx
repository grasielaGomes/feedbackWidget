import { ArrowLeft } from "phosphor-react";

export const ReturnButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
      title="Retornar"
      onClick={handleClick}
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
};
