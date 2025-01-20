import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <section className=" h-screen flex flex-col items-center justify-center text-center gap-4">
        <img
          src="/image/avatar/404.png"
          className="w-72 h-72 object-cover"
          alt="Not Found 404"
        />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          404 - Page Not Found
        </h1>
        <Link
          to="/"
          className="font-semibold rounded-lg flex justify-center items-center px-6 py-2 border bg-primary border-primary text-white hover:border-primary hover:text-white hover:shadow-lg hover:opacity-80  gap-2"
        >
          Go Back Home
        </Link>
      </section>
    </>
  );
};
