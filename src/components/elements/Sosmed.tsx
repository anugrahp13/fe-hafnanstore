import { useNavigate } from "react-router-dom";
import { SosmedProps } from "./types/Sosmed.type";

export const Sosmed: React.FC<SosmedProps> = ({
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
    "w-9 h-9 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:text-white hover:bg-primary dark:border-white hover:dark:border-primary";

  return (
    <button onClick={handleClick} className={defaultStyle}>
      <Icon className={iconClassName} />
    </button>
  );
};
