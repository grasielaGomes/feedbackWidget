import { useState } from "react";
import { feedbackApi } from "../../apis/feedbackApi";
import { FeedbackInput } from "./FeedbackInput";
import { FeedbackSuccess } from "./FeedbackSuccess";
import { FeedbackTypes } from "./FeedbackTypes";

export interface FormTypeProps {
  icon?: {
    alt: string;
    source: string;
  };
  label: string;
}

interface feedbackForm {
  message: string;
  screenshot: string;
  type: string;
}

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FormTypeProps | null>(null);
  const [feebackSent, setFeedbackSent] = useState(false);
  const [sendingFeedback, setSendingFeedback] = useState(false);

  const handleSubmitFeedback = async (form: feedbackForm) => {
    setSendingFeedback(true);
    try {
      await feedbackApi.post("/feedback", form);
      setFeedbackSent(true);
    } catch (error) {
      setSendingFeedback(false);
      setFeedbackSent(false);
      console.error(error);
    }
  };

  return (
    <aside className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feebackSent ? (
        <FeedbackSuccess
          handleReturnClick={() => {
            setFeedbackType(null);
            setFeedbackSent(false);
          }}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypes handleClick={setFeedbackType} />
          ) : (
            <FeedbackInput
              formType={feedbackType}
              handleReturnClick={() => setFeedbackType(null)}
              handleSendFeedback={(form) => handleSubmitFeedback(form)}
              isSendinngFeedback={sendingFeedback}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela 
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </aside>
  );
};
