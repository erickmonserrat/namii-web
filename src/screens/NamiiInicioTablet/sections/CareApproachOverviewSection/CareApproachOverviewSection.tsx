const benefitCards = [
  {
    title: (
      <>
        Conectar
        <br />
        en familia
      </>
    ),
    description:
      "Tiempo compartido para la exploración, la relajación y el vínculo.",
    icon: "/img/s-mbolo-del-beneficio-4.svg",
    iconClassName: "w-[26px] h-[26px]",
    colorClassName: "bg-turquoise",
    positionClassName: "row-[2_/_3] col-[2_/_3]",
  },
  {
    title: (
      <>
        Hyper
        <br />
        personalización
      </>
    ),
    description:
      "Grupos pequeños para encontrarse, jugar y explorar habilidades sociales.",
    icon: "/img/s-mbolo-del-beneficio-5.svg",
    iconClassName: "w-[10.4px] h-[11.56px]",
    colorClassName: "bg-jade",
    positionClassName: "row-[2_/_3] col-[1_/_2]",
  },
  {
    title: "Explorar en movimiento",
    description:
      "Experiencias que invitan a conocer el cuerpo y desarrollar habilidades motoras.",
    icon: "/img/s-mbolo-del-beneficio-6.svg",
    iconClassName: "w-[26px] h-[26px]",
    colorClassName: "bg-papay",
    positionClassName: "row-[1_/_2] col-[2_/_3]",
  },
  {
    title: (
      <>
        Descubrir
        <br />
        jugando
      </>
    ),
    description:
      "Oportunidades para explorar habilidades cognitivas y sensoriales.",
    icon: "/img/s-mbolo-del-beneficio-7.svg",
    iconClassName: "w-[26px] h-[26px]",
    colorClassName: "bg-playing-yellow",
    positionClassName: "row-[1_/_2] col-[1_/_2]",
  },
];

export const CareApproachOverviewSection = () => {
  return (
    <section
      aria-labelledby="care-approach-title"
      className="flex flex-col items-start gap-8 pt-12 pb-16 px-10 relative self-stretch w-full flex-[0_0_auto] bg-[#edf9f8]"
    >
      <header className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id="care-approach-title"
          className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[44px] text-center tracking-[-0.88px] leading-[51.0px]"
        >
          Nuestra forma de acompañar
        </h2>
        <p className="font-medium text-2xl leading-[33.6px] relative self-stretch [font-family:'Nunito_Sans',Helvetica] text-[#486071] text-center tracking-[0]">
          Cada peque descubre a su manera.
          <br />
          Nosotros sabemos cómo acompañarlo.
        </p>
      </header>
      <div className="grid grid-cols-2 grid-rows-[repeat(2,fit-content(100%))] h-fit gap-5">
        {benefitCards.map((card) => (
          <article
            key={card.description}
            className={`${card.positionClassName} relative w-full h-full flex flex-col items-start gap-4 p-6 bg-white rounded-[32px] overflow-hidden`}
          >
            <div
              className={`${card.colorClassName} flex w-[60px] h-[60px] items-center justify-center relative rounded-[20px] overflow-hidden`}
            >
              <img
                className={`relative ${card.iconClassName}`}
                alt="Smbolo del beneficio"
                src={card.icon}
              />
            </div>
            <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[23px] tracking-[-0.46px] leading-[27.6px]">
                  {card.title}
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
          </article>
        ))}
      </div>
    </section>
  );
};
