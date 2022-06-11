import { FormTypeProps } from ".";
import { Bug, Idea, Thought } from "../../assets";
import { FeedbackHeader } from "./FeedbackHeader";

const feedbackTypes = {
  bug: {
    label: "Problema",
    icon: {
      source: Bug,
      alt: "Imagem de um inseto"
    }
  },
  idea: {
    label: "Idéia",
    icon: {
      source: Idea,
      alt: "Imagem de uma lâmpada"
    }
  },
  other: {
    label: "Outro",
    icon: {
      source: Thought,
      alt: "Imagem de um balão de pensamento"
    }
  }
};

export const FeedbackTypes = ({
  handleClick
}: {
  handleClick: (type: FormTypeProps) => void;
}) => {
  return (
    <>
      <FeedbackHeader title="Deixe seu feedback" />
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(
          ([
            type,
            {
              label,
              icon: { source, alt }
            }
          ]) => (
            <button
              key={type}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-primary focus:border-primary focus:outline-none"
              onClick={() =>
                handleClick({
                  label,
                  icon: { source, alt }
                })
              }
              type="button"
            >
              <img src={source} alt={alt} />
              <span className="text-zinc-400">{label}</span>
            </button>
          )
        )}
      </div>
    </>
  );
};
