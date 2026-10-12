type SupportCard = {
  color: string;
  icon: string;
  iconClassName: string;
  title: JSX.Element;
  description: string;
};

const supportCards: SupportCard[] = [
  {
    color: "#ffd801",
    icon: "/img/vector.svg",
    iconClassName: "absolute w-[91.67%] h-[91.67%] top-[8.33%] left-[8.33%]",
    title: (
      <>
        Descubrir
        <br />
        jugando
      </>
    ),
    description:
      "Oportunidades para explorar habilidades cognitivas y sensoriales.",
  },
  {
    color: "#f79b6a",
    icon: "/img/vector-1.svg",
    iconClassName: "absolute w-[87.50%] h-[91.67%] top-[8.33%] left-[12.50%]",
    title: <>Explorar en movimiento</>,
    description:
      "Experiencias que invitan a conocer el cuerpo y desarrollar habilidades motoras.",
  },
  {
    color: "#5cf2ab",
    icon: "/img/vector-2.svg",
    iconClassName: "absolute w-[91.67%] h-[87.50%] top-[12.50%] left-[8.33%]",
    title: (
      <>
        Hyper
        <br />
        personalización
      </>
    ),
    description:
      "Grupos pequeños para encontrarse, jugar y explorar habilidades sociales.",
  },
  {
    color: "#2fc8d8",
    icon: "/img/vector-3.svg",
    iconClassName: "absolute w-[91.67%] h-[83.40%] top-[16.60%] left-[8.33%]",
    title: (
      <>
        Conectar
        <br />
        en familia
      </>
    ),
    description:
      "Tiempo compartido para la exploración, la relajación y el vínculo.",
  },
];

export const SupportApproachCardsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-11 pt-16 pb-[88px] px-[88px] relative self-stretch w-full flex-[0_0_auto] bg-[#ddf4f280]">
      <header className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[66px] text-center tracking-[-1.32px] leading-[76.6px]">
          Nuestra forma de acompañar
        </h2>
        <p className="font-medium text-[32px] text-center leading-[normal] relative self-stretch [font-family:'Nunito_Sans',Helvetica] text-[#486071] tracking-[0]">
          Cada peque descubre a su manera.
          <br />
          Nosotros sabemos cómo acompañarlo.
        </p>
      </header>
      <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
        {supportCards.map((card) => (
          <article
            key={card.icon}
            className="flex flex-col items-start gap-4 pt-5 pb-[30px] px-5 relative flex-1 grow bg-[#ffffff] rounded-[42px] overflow-hidden"
          >
            <div
              className="flex w-16 h-16 items-center justify-center relative rounded-[22px] overflow-hidden"
              style={{ backgroundColor: card.color }}
              aria-hidden="true"
            >
              <div className="relative w-7 h-7">
                <img className={card.iconClassName} alt="" src={card.icon} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[23px] tracking-[0] leading-[normal]">
                  {card.title}
                </h3>
                <div
                  className="inline-flex items-center relative flex-[0_0_auto]"
                  aria-hidden="true"
                >
                  <div className="relative w-2 h-2 opacity-30" />
                </div>
                <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-lg tracking-[0] leading-[27px]">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
