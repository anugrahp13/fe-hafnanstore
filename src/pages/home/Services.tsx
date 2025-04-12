import { ServicesProps } from "../../types/Services.type";

interface ServicesType {
  services: ServicesProps[];
}

export const Services: React.FC<ServicesType> = ({ services }) => {
  return (
    <>
      <section className="dark:bg-dark">
        <div className="container mx-auto py-14 lg:max-w-7xl text-center md:text-left">
          <div className="grid gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="flex flex-col md:flex-row justify-center items-center p-2 gap-4"
                  >
                    <div className="flex items-center justify-center rounded-full text-white bg-primary w-14 h-14">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="grid gap-1 text-center md:text-left">
                      <span className="font-bold text-2xl text-primary dark:text-white">
                        {service.title}
                      </span>
                      <span className="text-sm text-dark dark:text-slate-300">
                        {service.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
