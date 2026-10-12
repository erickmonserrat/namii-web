type ExperienceCard = {
  backgroundClass: string;
  title: JSX.Element;
  description: string;
  className?: string;
};

const experienceCards: ExperienceCard[] = [
  {
    backgroundClass: "bg-[url(/img/dialog.svg)]",
    title: <>Especialistas en primera infancia</>,
    description:
      "Expertos en crear experiencias de aprendizaje a través del juego y la exploración.",
    className: "ml-[-1.00px]",
  },
  {
    backgroundClass: "bg-[url(/img/dialog-1.svg)]",
    title: (
      <>
        +8 años
        <br />
        acompañando
      </>
    ),
    description:
      "Experiencia y dedicación para acompañar cada etapa del crecimiento de tu bebé.",
  },
  {
    backgroundClass: "bg-[url(/img/dialog-2.svg)]",
    title: (
      <>
        Cada bebé
        <br />
        es único
      </>
    ),
    description:
      "Actividades adecuadas a su desarrollo, respetando su ritmo y sus necesidades.",
    className: "ml-[-1.00px]",
  },
  {
    backgroundClass: "bg-[url(/img/dialog-3.svg)]",
    title: <>Crecer juntos, con confianza</>,
    description:
      "Espacio seguro y cercano donde  participan activamente en cada descubrimiento.",
  },
];

const experienceRows = [
  experienceCards.slice(0, 2),
  experienceCards.slice(2, 4),
];

export const ChildcareExperienceCardsSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="childcare-experience-title"
      className="flex flex-col w-[1440px] items-center justify-center gap-10 pt-0 pb-[88px] px-[88px] relative flex-[0_0_auto] bg-[#ddf4f280]"
    >
      <header className="items-center self-stretch w-full flex-[0_0_auto] flex flex-col gap-3.5 relative">
        <h2
          id="childcare-experience-title"
          className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[66px] text-center tracking-[-1.32px] leading-[76.6px]"
        >
          Equipo y experiencia
        </h2>
        <p className="font-normal text-xl text-center leading-[30px] relative self-stretch [font-family:'Nunito_Sans',Helvetica] text-[#486071] tracking-[0]">
          Distintas maneras de explorar. La misma alegría de estar juntos.
        </p>
      </header>
      {experienceRows.map((row, rowIndex) => (
        <div
          key={`experience-row-${rowIndex}`}
          className="flex w-[1264px] items-start justify-between relative flex-[0_0_auto] overflow-hidden"
        >
          {row.map((card, cardIndex) => (
            <article
              key={`experience-card-${rowIndex}-${cardIndex}`}
              className={`${card.backgroundClass} flex flex-col w-[620px] items-start p-10 relative mt-[-1.00px] mb-[-1.00px] rounded-[42px] overflow-hidden border border-solid border-[#0e0e2c0d] shadow-[0px_1px_1px_#0000000d,0px_20px_36px_-8px_#0e0e2c1a] bg-cover bg-[50%_50%] ${card.className ?? ""}`}
            >
              <div
                aria-hidden="true"
                className="relative self-stretch w-full h-px"
              />
              <div className="flex flex-col w-[303px] items-center gap-2 pt-5 pb-10 px-5 relative flex-[0_0_auto] bg-white rounded-[42px] overflow-hidden border border-solid border-[#efeffd]">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    aria-hidden="true"
                    className="inline-flex items-center relative flex-[0_0_auto]"
                  >
                    <div className="relative w-4 h-4 opacity-40" />
                  </div>
                  <h3 className="flex items-center text-indigo text-[32px] tracking-[-0.64px] relative self-stretch [font-family:'Quicksand',Helvetica] font-bold leading-[normal]">
                    {card.title}
                  </h3>
                  <div
                    aria-hidden="true"
                    className="inline-flex items-center relative flex-[0_0_auto]"
                  >
                    <div className="relative w-2 h-2 opacity-30" />
                  </div>
                  <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-textbody text-2xl tracking-[0] leading-[normal]">
                    {card.description}
                  </p>
                  <div
                    aria-hidden="true"
                    className="inline-flex items-center relative flex-[0_0_auto]"
                  >
                    <div className="relative w-4 h-4 opacity-40" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ))}
    </section>
  );
};
