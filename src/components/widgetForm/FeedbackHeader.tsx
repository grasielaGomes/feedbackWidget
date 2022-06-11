import { FormTypeProps } from ".";
import { CloseButton } from "../buttons/CloseButton";
import { ReturnButton } from "../buttons/ReturnButton";

export interface FeedbackHeaderProps {
  title?: string;
  type?: FormTypeProps;
  handleReturnClick?: () => void;
}

export const FeedbackHeader = ({
  title,
  type,
  handleReturnClick = () => {}
}: FeedbackHeaderProps) => {
  const { label, icon } = type || {};
  return (
    <header>
      {icon && <ReturnButton handleClick={handleReturnClick} />}
      <span className="text-xl leading-6 flex items-center gap-2">
        {icon && <img src={icon?.source} alt={icon?.alt} className="w-6 h-6" />}
        {title || label}
      </span>
      <CloseButton />
    </header>
  );
};
