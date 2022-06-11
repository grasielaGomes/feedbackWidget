import { useState } from "react";
import { FormTypeProps } from ".";
import { FeedbackHeader } from "./FeedbackHeader";
import { ScreenshotButton } from "./ScreenshotButton";
import { CircleLoading } from "../loadings/CircleLoading";

interface FeedbackInputProps {
  formType: FormTypeProps;
  handleSendFeedback: (form: {
    message: string;
    screenshot: string;
    type: string;
  }) => void;
  handleReturnClick?: () => void;
  isSendinngFeedback?: boolean;
}

export const FeedbackInput = ({
  formType,
  handleSendFeedback,
  handleReturnClick,
  isSendinngFeedback = false
}: FeedbackInputProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendFeedback({
      message,
      screenshot: screenshot || "",
      type: formType.label
    });
  };
  return (
    <>
      <FeedbackHeader type={formType} handleReturnClick={handleReturnClick} />
      <form className="my-4 w-full" onSubmit={(e) => handleSubmit(e)}>
        <textarea
          className="w-full sm:min-w-[304px] min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-primary focus:ring-primary focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent"
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            handleScreenshot={(screenshot) => setScreenshot(screenshot)}
            screenshot={screenshot}
          />
          <button
            className="p-2 bg-primary rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-primaryHover focus:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-primary transition-colors disabled:opacity-50 disabled:hover:bg-primary"
            type="submit"
            disabled={message.length === 0 || isSendinngFeedback}
          >
            {isSendinngFeedback ? <CircleLoading /> : "Enviar Feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};
