type CareApproachCard = {
  title: string[];
  description: string;
  icon: string;
  iconClassName: string;
  colorClassName: string;
  row: string;
};

const careApproachCards: CareApproachCard[] = [
  {
    title: ["Descubrir", "jugando"],
    description:
      "Oportunidades para explorar habilidades cognitivas y sensoriales.",
    icon: "/img/s-mbolo-del-beneficio-7.svg",
    iconClassName: "w-[26px] h-[26px]",
    colorClassName: "bg-playing-yellow",
    row: "row-[1_/_2]",
  },
  {
    title: ["Explorar en movimiento"],
    description:
      "Experiencias que invitan a conocer el cuerpo y desarrollar habilidades motoras.",
    icon: "/img/s-mbolo-del-beneficio-6.svg",
    iconClassName: "w-[26px] h-[26px]",
    colorClassName: "bg-papay",
    row: "row-[2_/_3]",
  },
  {
    title: ["Hyper", "personalización"],
    description:
      "Grupos pequeños para encontrarse, jugar y explorar habilidades sociales.",
    icon: "/img/s-mbolo-del-beneficio-1.svg",
    iconClassName: "w-[10.4px] h-[11.56px]",
    colorClassName: "bg-jade",
    row: "row-[3_/_4]",
  },
  {
    title: ["Conectar", "en familia"],
    description:
      "Tiempo compartido para la exploración, la relajación y el vínculo.",
    icon: "/img/s-mbolo-del-beneficio-4.svg",
    iconClassName: "w-[26px] h-[26px]",
    colorClassName: "bg-turquoise",
    row: "row-[4_/_5]",
  },
];

export const CareApproachSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="care-approach-title"
      className="flex flex-col items-start gap-8 pt-8 pb-12 px-6 relative self-stretch w-full flex-[0_0_auto] bg-[#edf9f8]"
    >
      <header className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id="care-approach-title"
          className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[34px] text-center tracking-[-0.68px] leading-[39.4px]"
        >
          Nuestra forma de acompañar
        </h2>
        <p className="font-medium text-xl leading-[28.0px] relative self-stretch [font-family:'Nunito_Sans',Helvetica] text-[#486071] text-center tracking-[0]">
          Cada peque descubre a su manera.
          <br />
          Nosotros sabemos cómo acompañarlo.
        </p>
      </header>
      <div className="grid grid-cols-1 grid-rows-[repeat(4,fit-content(100%))] h-fit gap-5">
        {careApproachCards.map((card) => (
          <article
            className={`${card.row} relative col-[1_/_2] w-full h-full flex flex-col items-start gap-4 p-6 bg-white rounded-[32px] overflow-hidden`}
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
                <h3
                  className={`relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[23px] tracking-[-0.46px] leading-[27.6px] ${
                    card.title.length === 1 ? "flex items-center" : ""
                  }`}
                >
                  {card.title.map((line, index) => (
                    <span key={`${line}-${index}`}>
                      {line}
                      {index < card.title.length - 1 && <br />}
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
          </article>
        ))}
      </div>
    </section>
  );
};
