type ExperienceCard = {
  title: string[];
  description: string;
  backgroundClassName: string;
  gridClassName: string;
  titleClassName: string;
  outerBackgroundClassName?: string;
};

const experienceCards: ExperienceCard[] = [
  {
    title: ["Crecer juntos, con confianza"],
    description:
      "Espacio seguro y cercano donde  participan activamente en cada descubrimiento.",
    backgroundClassName: "bg-[url(/img/experiencia-4.svg)]",
    gridClassName: "row-[2_/_3] col-[2_/_3]",
    titleClassName: "flex items-center",
  },
  {
    title: ["Cada bebé", "es único"],
    description:
      "Actividades adecuadas a su desarrollo, respetando su ritmo y sus necesidades.",
    backgroundClassName: "bg-[url(/img/experiencia-5.svg)]",
    gridClassName: "row-[2_/_3] col-[1_/_2]",
    titleClassName: "",
  },
  {
    title: ["+8 años", "acompañando"],
    description:
      "Experiencia y dedicación para acompañar cada etapa del crecimiento de tu bebé.",
    backgroundClassName: "bg-[url(/img/experiencia-6.svg)]",
    outerBackgroundClassName: "bg-[url(/img/encuentro.svg)]",
    gridClassName: "row-[1_/_2] col-[2_/_3]",
    titleClassName: "",
  },
  {
    title: ["Especialistas en primera infancia"],
    description:
      "Expertos en crear experiencias de aprendizaje a través del juego y la exploración.",
    backgroundClassName: "bg-[url(/img/experiencia-7.svg)]",
    gridClassName: "row-[1_/_2] col-[1_/_2]",
    titleClassName: "flex items-center",
  },
];

export const ChildcareExperienceOverviewSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="childcare-experience-heading"
      className="flex flex-col items-start gap-8 pt-0 pb-16 px-10 relative self-stretch w-full flex-[0_0_auto] bg-[#edf9f8]"
    >
      <header className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id="childcare-experience-heading"
          className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[44px] text-center tracking-[-0.88px] leading-[51.0px]"
        >
          Equipo y experiencia
        </h2>
        <p className="font-normal text-xl leading-[30px] relative self-stretch [font-family:'Nunito_Sans',Helvetica] text-[#486071] text-center tracking-[0]">
          Distintas maneras de explorar. La misma alegría de estar juntos.
        </p>
      </header>
      <div className="grid grid-cols-2 grid-rows-[repeat(2,fit-content(100%))] h-fit gap-6">
        {experienceCards.map((card) => (
          <article
            className={`${card.gridClassName} relative w-full h-fit flex flex-col items-start`}
          >
            <div
              className={`${card.backgroundClassName} ${
                card.outerBackgroundClassName ?? ""
              } flex flex-col min-h-[330px] items-start justify-center pl-5 pr-28 py-6 relative self-stretch w-full flex-[0_0_auto] rounded-[32px] overflow-hidden bg-cover bg-[50%_50%]`}
            >
              <div className="flex flex-col items-center gap-2 p-5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[32px] overflow-hidden">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <h3
                    className={`${card.titleClassName} text-2xl tracking-[-0.48px] leading-[28.8px] relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f]`}
                  >
                    {card.title.map((line, index) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index < card.title.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </h3>
                  <div className="inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-2 h-2 opacity-30" />
                  </div>
                  <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-lg tracking-[0] leading-[27px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
