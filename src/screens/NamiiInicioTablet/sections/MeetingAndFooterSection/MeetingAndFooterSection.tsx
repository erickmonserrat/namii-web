type FooterColumn = {
  title: string;
  links: string[];
  position: string;
};

const footerColumns: FooterColumn[] = [
  {
    title: "Conversemos",
    links: ["Agenda tu visita", "Preguntas frecuentes"],
    position: "row-[1_/_2] col-[3_/_4]",
  },
  {
    title: "Experiencias",
    links: ["Crece", "Conecta", "Post vacuna", "Clase muestra gratis"],
    position: "col-[2_/_3] row-[1_/_2]",
  },
  {
    title: "Explora namii",
    links: ["Nuestro enfoque", "Nuestras experiencias", "Cómo empezar"],
    position: "col-[1_/_2] row-[1_/_2]",
  },
];

const footerLinkHref = (link: string): string => {
  const hrefs: Record<string, string> = {
    "Agenda tu visita": "#agenda",
    "Preguntas frecuentes": "#preguntas-frecuentes",
    Crece: "#crece",
    Conecta: "#conecta",
    "Post vacuna": "#post-vacuna",
    "Clase muestra gratis": "#clase-muestra",
    "Nuestro enfoque": "#nuestro-enfoque",
    "Nuestras experiencias": "#nuestras-experiencias",
    "Cómo empezar": "#como-empezar",
  };

  return hrefs[link] ?? "#";
};

export const MeetingAndFooterSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
      aria-labelledby="meeting-title"
    >
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#ffd0b7]">
        <img
          className="relative self-stretch w-full h-10"
          alt="Onda"
          src="/img/onda-3.svg"
        />
        <div className="flex flex-col items-center gap-6 pt-8 pb-16 px-[100px] relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="absolute top-0 left-2.5 w-[132px] h-[205px]"
            alt="Gesto de marca"
            src="/img/gesto-de-marca-2.svg"
          />
          <img
            className="absolute top-[51px] right-0 w-[161px] h-[143px]"
            alt="Gesto de marca"
            src="/img/gesto-de-marca-3.svg"
          />
          <h2
            id="meeting-title"
            className="font-bold text-[#05263f] text-[42px] text-center tracking-[-0.84px] leading-[48.7px] relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica]"
          >
            Hagamos espacio para
            <br />
            crecer y conectar.
          </h2>
          <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#05263f] text-xl text-center tracking-[0] leading-[30px]">
            Conoce namii con tu peque. Agenda tu clase muestra gratis en Crece o
            conversemos sobre la experiencia Conecta.
          </p>
          <a
            className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-playing-yellow rounded-[100px] overflow-hidden cursor-pointer"
            href="#agenda"
            aria-label="Agenda tu clase muestra gratis"
          >
            <span className="h-6 inline-flex items-center gap-2 relative">
              <span className="relative flex items-center w-fit font-bold font-[number:var(--bold-font-weight)] text-indigo text-[length:var(--bold-font-size)] tracking-[var(--bold-letter-spacing)] leading-[var(--bold-line-height)] [font-style:var(--bold-font-style)]">
                Agenda tu clase
              </span>
            </span>
          </a>
        </div>
      </div>
      <footer className="flex flex-col items-start gap-9 pt-14 pb-7 px-10 relative self-stretch w-full flex-[0_0_auto] bg-[#05263f]">
        <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[180.04px] items-end gap-[7.86px] relative flex-[0_0_auto]">
            <img
              className="relative w-[180.04px] h-[53.92px]"
              alt="Capa"
              src="/img/capa-4-3.png"
            />
            <img
              className="relative w-[92.48px] h-[7.46px]"
              alt="Group"
              src="/img/group-3.png"
            />
          </div>
          <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-light text-lg tracking-[0] leading-[27px]">
            Un espacio para descubrir el mundo.
            <br />
            Un momento para hacerlo juntos.
          </p>
        </div>
        <nav
          className="grid grid-cols-3 grid-rows-[repeat(1,fit-content(100%))] h-fit gap-[24px_32px]"
          aria-label="Enlaces del sitio"
        >
          {footerColumns.map((column) => (
            <div
              className={`${column.position} relative w-full h-fit flex flex-col items-start gap-3.5`}
              key={column.title}
            >
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-jade text-[19px] tracking-[0] leading-[normal]">
                {column.title}
              </h3>
              {column.links.map((link) => (
                <a
                  className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-light text-base tracking-[0] leading-[22.4px]"
                  href={footerLinkHref(link)}
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </nav>
        <div className="flex items-center justify-between pt-6 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#f8f6e438]">
          <div className="flex w-[84px] items-center gap-2.5 relative">
            <p className="relative w-fit mt-[-1.00px] mr-[-110.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-light text-sm tracking-[0] leading-[19.6px]">
              © namii.mx · <br />
              Todos los derechos reservados
            </p>
          </div>
          <p className="relative w-fit [font-family:'Pacifico',Helvetica] font-normal text-light text-xl tracking-[0] leading-[normal]">
            Crece &amp; Conecta
          </p>
          <a
            className="inline-flex items-start gap-[22px] relative flex-[0_0_auto]"
            href="#redes-sociales"
            aria-label="Visita nuestras redes sociales"
          >
            <img
              className="relative w-[84px] h-[26.67px]"
              alt="Facebook e instagram"
              src="/img/facebook-e-instagram-2.svg"
            />
          </a>
        </div>
      </footer>
    </section>
  );
};
