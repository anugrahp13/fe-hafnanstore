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
    "w-10 h-10 rounded-full flex justify-center items-center border bg-primary border-primary text-white hover:border-primary hover:text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out";

  return (
    <button onClick={handleClick} className={defaultStyle}>
      <Icon className={iconClassName} />
    </button>
  );
};
