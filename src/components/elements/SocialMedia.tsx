import { useNavigate } from "react-router-dom";
import { SocialMediaProps } from "../../types/SocialMedia.type";

export const SocialMedia: React.FC<SocialMediaProps> = ({
  to,
  icon: Icon = () => null,
  iconClassName,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to.startsWith("http")) {
      window.open(to, "_blank");
    } else {
      navigate(to);
    }
  };

  const defaultStyle =
    "w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary";

  return (
    <button onClick={handleClick} className={defaultStyle}>
      <Icon className={iconClassName} />
    </button>
  );
};
