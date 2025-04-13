import { Link } from "react-router-dom";
import useBreadcrumbStore from "../../stores/useBreadcrumbStore";

interface BreadcrumbProps {
  className?: string;
}
const Breadcrumb = ({ className = "" }: BreadcrumbProps) => {
  const { items } = useBreadcrumbStore();

  return (
    <nav className={`flex mb-2 ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg
                className="w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}
            {index === items.length - 1 ? (
              <span className="ml-1 text-sm font-semibold text-gray-500 md:ml-2 dark:text-gray-400">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="inline-flex items-center text-sm font-semibold text-primary dark:text-white hover:text-gray-800"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
