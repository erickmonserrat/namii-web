const steps = [
  {
    number: "01",
    title: "Explora nuestras experiencias",
    description:
      "Explora Crece y Conecta y cuéntanos qué te gustaría vivir con tu peque.",
  },
  {
    number: "02",
    title: (
      <>
        Ven y
        <br />
        disfrutar
      </>
    ),
    description:
      "Te orientamos para encontrar la experiencia ideal para ti y tu peque.",
  },
  {
    number: "03",
    title: "Ven a descubrir",
    description:
      "Descubre una clase muestra gratuita de estimulación temprana.",
  },
];

export const GettingStartedGuideSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="getting-started-title"
      className="flex flex-col items-start gap-8 px-6 py-12 relative self-stretch w-full flex-[0_0_auto]"
    >
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id="getting-started-title"
          className="font-bold text-[#164c4a] relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] text-[34px] tracking-[-0.68px] leading-[39.4px]"
        >
          Empezar es así de fácil
        </h2>
        <a
          href="#agenda"
          className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-playing-yellow rounded-[100px] overflow-hidden focus-visible:ring-2 focus-visible:ring-[#164c4a] focus-visible:ring-offset-2"
          aria-label="Agenda tu clase"
        >
          <span className="h-6 inline-flex items-center gap-2 relative">
            <span className="relative flex items-center w-fit font-bold font-[number:var(--bold-font-weight)] text-indigo text-[length:var(--bold-font-size)] tracking-[var(--bold-letter-spacing)] leading-[var(--bold-line-height)] [font-style:var(--bold-font-style)]">
              Agenda tu clase
            </span>
          </span>
        </a>
      </div>
      <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
        {steps.map((step) => (
          <article
            key={step.number}
            className="flex flex-col items-start gap-3.5 pt-5 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#164c4a]"
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#2fcf93] text-[34px] tracking-[0] leading-[normal]">
              {step.number}
            </div>
            <h3
              className={`relative self-stretch [font-family:'Quicksand',Helvetica] font-bold text-[#164c4a] tracking-[0] ${
                step.number === "02"
                  ? "text-[22px] leading-[27.5px]"
                  : "text-2xl leading-[30px]"
              }`}
            >
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
