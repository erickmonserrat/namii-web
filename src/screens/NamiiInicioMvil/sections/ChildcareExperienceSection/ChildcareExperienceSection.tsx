type ExperienceCard = {
  backgroundClass: string;
  rowClass: string;
  title: string[];
  description: string;
};

const experienceCards: ExperienceCard[] = [
  {
    backgroundClass: "bg-[url(/img/experiencia.svg)]",
    rowClass: "row-[4_/_5]",
    title: ["Crecer juntos, con confianza"],
    description:
      "Actividades adecuadas a su desarrollo, respetando su ritmo y sus necesidades.",
  },
  {
    backgroundClass: "bg-[url(/img/experiencia-1.svg)]",
    rowClass: "row-[3_/_4]",
    title: ["Cada bebé", "es único"],
    description:
      "Adaptamos las actividades a su etapa de desarrollo, respetando su ritmo y sus necesidades.",
  },
  {
    backgroundClass: "bg-[url(/img/experiencia-2.svg)]",
    rowClass: "row-[2_/_3]",
    title: ["+8 años", "acompañando"],
    description:
      "Experiencia y dedicación para acompañar cada etapa del crecimiento de tu bebé.",
  },
  {
    backgroundClass: "bg-[url(/img/experiencia-3.svg)]",
    rowClass: "row-[1_/_2]",
    title: ["Especialistas en primera infancia"],
    description:
      "Compartir la aventura de crecer, cerca de quienes más quieren.",
  },
];

export const ChildcareExperienceSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="childcare-experience-title"
      className="flex flex-col items-start gap-8 pt-0 pb-12 px-6 relative self-stretch w-full flex-[0_0_auto] bg-[#edf9f8]"
    >
      <header className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id="childcare-experience-title"
          className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[34px] text-center tracking-[-0.68px] leading-[39.4px]"
        >
          Equipo y experiencia
        </h2>
        <p className="font-normal text-lg leading-[27px] relative self-stretch [font-family:'Nunito_Sans',Helvetica] text-[#486071] text-center tracking-[0]">
          Distintas maneras de explorar. La misma alegría de estar juntos.
        </p>
      </header>
      <div className="grid grid-cols-1 grid-rows-[repeat(4,fit-content(100%))] h-fit gap-6">
        {experienceCards.map((card) => (
          <article
            key={card.backgroundClass}
            className={`${card.rowClass} h-full relative col-[1_/_2] w-full flex flex-col items-start`}
          >
            <div
              className={`${card.backgroundClass} flex flex-col min-h-[310px] items-start justify-center pl-5 pr-[104px] py-6 relative self-stretch w-full flex-[0_0_auto] rounded-[32px] overflow-hidden bg-cover bg-[50%_50%]`}
            >
              <div className="flex flex-col w-[241px] items-center gap-2 p-5 relative flex-[0_0_auto] mr-[-23.00px] bg-white rounded-[32px] overflow-hidden">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="flex items-center text-2xl tracking-[-0.48px] leading-[28.8px] relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f]">
                    {card.title.map((line, index) => (
                      <span key={`${line}-${index}`}>
                        {line}
                        {index < card.title.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </h3>
                  <div
                    aria-hidden="true"
                    className="inline-flex items-center relative flex-[0_0_auto]"
                  >
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
