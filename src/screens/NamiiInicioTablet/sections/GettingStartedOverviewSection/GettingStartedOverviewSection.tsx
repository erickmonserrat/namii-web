import { useCallback } from "react";

type GettingStartedStep = {
  number: string;
  title: string;
  description: string;
  titleBreak?: boolean;
};

const gettingStartedSteps: GettingStartedStep[] = [
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
    titleBreak: true,
  },
];

export const GettingStartedOverviewSection = (): JSX.Element => {
  const handleScheduleClass = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent("namii:schedule-class", {
        detail: { source: "getting-started-overview" },
      }),
    );
  }, []);

  return (
    <section
      aria-labelledby="getting-started-overview-title"
      className="flex flex-col items-start gap-8 px-10 py-16 relative self-stretch w-full flex-[0_0_auto]"
    >
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id="getting-started-overview-title"
          className="font-bold text-[#164c4a] text-[44px] tracking-[-0.88px] leading-[51.0px] relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica]"
        >
          Empezar es así de fácil
        </h2>
        <button
          type="button"
          onClick={handleScheduleClass}
          className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-playing-yellow rounded-[100px] overflow-hidden cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164c4a]"
          aria-label="Agenda tu clase"
        >
          <span className="h-6 inline-flex items-center gap-2 relative">
            <span className="relative flex items-center w-fit font-bold font-[number:var(--bold-font-weight)] text-indigo text-[length:var(--bold-font-size)] tracking-[var(--bold-letter-spacing)] leading-[var(--bold-line-height)] [font-style:var(--bold-font-style)]">
              Agenda tu clase
            </span>
          </span>
        </button>
      </div>
      <ol className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto] list-none m-0 p-0">
        {gettingStartedSteps.map((step) => (
          <li
            key={step.number}
            className="flex flex-col items-start gap-3.5 pt-5 pb-0 px-0 relative flex-1 grow border-t [border-top-style:solid] border-[#164c4a]"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#2fcf93] text-[34px] tracking-[0] leading-[normal]">
              {step.number}
            </span>
            {step.titleBreak ? (
              <h3 className="relative self-stretch [font-family:'Quicksand',Helvetica] font-bold text-[#164c4a] text-[22px] tracking-[0] leading-[27.5px]">
                Ven y
                <br />
                disfrutar
              </h3>
            ) : (
              <h3 className="relative self-stretch [font-family:'Quicksand',Helvetica] font-bold text-[#164c4a] text-[22px] tracking-[0] leading-[27.5px]">
                {step.title}
              </h3>
            )}
            <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#164c4a] text-lg tracking-[0] leading-[27px]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};
