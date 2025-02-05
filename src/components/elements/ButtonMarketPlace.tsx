import { ButtonMarketPlaceProps } from "./types/ButtonMarketPlace.type";
import { Link } from "react-router-dom";

export const ButtonMarketPlace: React.FC<ButtonMarketPlaceProps> = ({
  href,
  to,
  icon: Icon = () => null,
  variant,
  className = "",
  iconClassName = "",
}) => {
  const defaultStyle =
    "font-semibold rounded-lg flex justify-center items-center px-6 py-2 gap-2";
  const variants = {
    primary:
      "border-2 bg-primary border-primary text-white hover:border-primary hover:text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out",
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
        target="_blank"
        rel="noopener noreferrer"
        className={`${defaultStyle} ${variants[variant]} ${className}`}
      >
        {Icon && <Icon className={iconClassName} />}
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
      </Link>
    );
  }
  return null;
};
