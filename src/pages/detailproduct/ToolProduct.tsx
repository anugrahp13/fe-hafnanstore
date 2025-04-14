import { Link } from "react-router-dom";
import { NexasitesProps } from "../../types/Nexasite.type";

interface DetailProductProps {
  nexasites: NexasitesProps;
}

export const ToolProduct = ({ nexasites }: DetailProductProps) => {
  return (
    <>
      <div className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1">
        <div className="grid gap-4">
          <div className="text-lg font-bold">Tools</div>
          <hr />

          <div className="w-full md:mt-0 text-left grid grid-row-1 gap-4">
            {nexasites.nameTool.map((tech, index) => {
              const imagePath =
                nexasites.imageTool?.[index] || "/image/skills/default.svg";
              const techLink = nexasites.linkTool?.[index] || "#";

              return (
                <Link
                  key={index}
                  to={techLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-3 p-4 shadow-md bg-white hover:dark:shadow-slate-700/50 dark:bg-slate-700 rounded-xl cursor-pointer active:scale-95 active:shadow-sm  transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <picture>
                      <img
                        src={imagePath}
                        alt={tech}
                        className="w-10 h-10"
                        onError={(e) => {
                          console.error(`Failed to load image: ${imagePath}`);
                          (e.target as HTMLImageElement).src =
                            "/image/skills/default.svg";
                        }}
                      />
                    </picture>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-sm line-clamp-1 mb-1">
                      {tech}
                    </h3>
                    <p className="font-medium text-xs line-clamp-2 text-slate-800 dark:text-slate-300">
                      {techLink !== "#" ? "Download" : "No Link Available"}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
