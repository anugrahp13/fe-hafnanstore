import { ButtonProps } from "../elements/types/Button.type";
import { Link } from "react-router-dom";

export const Button: React.FC<ButtonProps> = ({
  href,
  to,
  text,
  icon: Icon = () => null,
  variant,
  className = "",
  iconClassName = "",
}) => {
  const defaultStyle =
    "font-semibold rounded-lg flex justify-center items-center px-6 py-2 gap-2";
  const variants = {
    primary:
      "border-2 border-slate-800 dark:border-white dark:border-white hover:dark:border-primary text-slate-800 hover:border-primary hover:text-white dark:text-white hover:bg-primary",
    secondary:
      "border-2 bg-primary border-primary text-white hover:border-primary hover:text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out",
    tertiary:
      "border-2 bg-whatapp border-whatapp text-white hover:border-whatapp hover:text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out",
  };

  // Jika `href` adalah external link
  if (href?.startsWith("http")) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${defaultStyle} ${variants[variant]} ${className}`}
      >
        {Icon && <Icon className={iconClassName} />}
        {text}
      </a>
    );
  }

  // Jika `href` adalah internal link
  if (to) {
    return (
      <Link
        to={to}
        className={`${defaultStyle} ${variants[variant]} ${className}`}
      >
        {Icon && <Icon className={iconClassName} />}
        {text}
      </Link>
    );
  }
  return null;
};
