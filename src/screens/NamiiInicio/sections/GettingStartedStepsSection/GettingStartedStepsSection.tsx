const steps = [
  {
    number: "01",
    title: "Explora nuestras experiencias",
    description:
      "Conoce nuestras sesiones de estimulación temprana y acuática para tu bebé.",
  },
  {
    number: "02",
    title: "Encuentra la ideal para ti",
    description:
      "Te orientamos para encontrar la experiencia ideal para ti y tu peque.",
  },
  {
    number: "03",
    title: "Ven y disfrutar",
    description:
      "Descubre una clase muestra gratuita de estimulación temprana.",
  },
];

export const GettingStartedStepsSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="getting-started-heading"
      className="flex flex-col items-start gap-[42px] px-[88px] py-20 relative self-stretch w-full flex-[0_0_auto]"
    >
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="w-[820px] items-start flex flex-col gap-3.5 relative">
          <h2
            id="getting-started-heading"
            className="h-[104px] font-bold text-[#164c4a] text-[66px] tracking-[-1.32px] leading-[76.6px] relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica]"
          >
            Empezar es así de fácil
          </h2>
        </div>
        <button
          type="button"
          className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-playing-yellow rounded-[100px] overflow-hidden cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164c4a]"
          aria-label="Agenda tu clase"
        >
          <span className="h-6 inline-flex items-center gap-2 relative">
            <span className="relative flex items-center w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-extrabold text-indigo text-[17px] tracking-[0] leading-[normal]">
              Agenda tu clase
            </span>
          </span>
        </button>
      </div>
      <div className="flex items-start gap-10 relative self-stretch w-full flex-[0_0_auto] overflow-hidden">
        {steps.map((step) => (
          <article
            key={step.number}
            className="flex flex-col items-start gap-4 pt-[22px] pb-0 px-0 relative flex-1 grow border-t [border-top-style:solid] border-[#164c4a]"
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#2fcf93] text-[38px] tracking-[0] leading-[normal]">
              {step.number}
            </div>
            <h3 className="relative self-stretch [font-family:'Quicksand',Helvetica] font-bold text-[#164c4a] text-2xl tracking-[0] leading-[normal]">
              {step.title}
            </h3>
            <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#164c4a] text-lg tracking-[0] leading-[27px]">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
