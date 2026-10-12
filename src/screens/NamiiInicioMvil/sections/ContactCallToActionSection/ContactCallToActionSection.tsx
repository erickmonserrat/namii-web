const exploreLinks = [
  "Nuestro enfoque",
  "Nuestras experiencias",
  "Cómo empezar",
];

const experienceLinks = [
  "Crece",
  "Conecta",
  "Post vacuna",
  "Clase muestra gratis",
];

const conversationLinks = ["Agenda tu visita", "Preguntas frecuentes"];

export const ContactCallToActionSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] overflow-hidden"
      aria-labelledby="contact-call-to-action-title"
    >
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#ffd0b7]">
        <img
          className="relative self-stretch w-full h-6"
          alt="Onda"
          src="/img/onda-1.svg"
        />
        <div className="flex flex-col items-center gap-6 pt-8 pb-14 px-6 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="absolute top-[180px] left-0 w-[54px] h-[140px]"
            alt=""
            aria-hidden="true"
            src="/img/gesto-de-marca.svg"
          />
          <img
            className="absolute top-[13px] right-0 w-[109px] h-24"
            alt=""
            aria-hidden="true"
            src="/img/gesto-de-marca-1.svg"
          />
          <h2
            id="contact-call-to-action-title"
            className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[34px] text-center tracking-[-0.68px] leading-[39.4px]"
          >
            Hagamos espacio para
            <br />
            crecer y conectar.
          </h2>
          <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#05263f] text-lg text-center tracking-[0] leading-[27px]">
            Conoce namii con tu peque. Agenda tu clase muestra gratis en Crece o
            conversemos sobre la experiencia Conecta.
          </p>
          <a
            className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-playing-yellow rounded-[100px] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05263f]"
            href="#contacto"
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
      <footer
        id="contacto"
        className="flex flex-col items-start gap-9 pt-12 pb-7 px-6 relative self-stretch w-full flex-[0_0_auto] bg-[#05263f]"
      >
        <div className="flex flex-col items-start gap-[22px] relative self-stretch w-full flex-[0_0_auto]">
          <a
            className="flex flex-col w-[180.04px] items-end gap-[7.86px] relative flex-[0_0_auto] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
            href="/"
            aria-label="Namii, inicio"
          >
            <img
              className="relative w-[180.04px] h-[53.92px]"
              alt="Capa"
              src="/img/capa-4-3.png"
            />
            <img
              className="relative w-[92.48px] h-[7.46px]"
              alt="Group"
              src="/img/group-1.png"
            />
          </a>
          <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-light text-lg tracking-[0] leading-[27px]">
            Un espacio para descubrir el mundo.
            <br />
            Un momento para hacerlo juntos.
          </p>
        </div>
        <nav
          className="grid grid-cols-2 grid-rows-[repeat(2,fit-content(100%))] h-fit gap-[24px_32px]"
          aria-label="Navegación del pie de página"
        >
          <div className="relative row-[2_/_3] col-[1_/_2] w-full h-fit flex flex-col items-start gap-3.5">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-jade text-[19px] tracking-[0] leading-[normal]">
              Conversemos
            </h3>
            {conversationLinks.map((link) => (
              <a
                key={link}
                className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-light text-base tracking-[0] leading-[22.4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
                href="#contacto"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="col-[2_/_3] relative row-[1_/_2] w-full h-fit flex flex-col items-start gap-3.5">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-jade text-[19px] tracking-[0] leading-[normal]">
              Experiencias
            </h3>
            {experienceLinks.map((link) => (
              <a
                key={link}
                className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-light text-base tracking-[0] leading-[22.4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
                href="#contacto"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="col-[1_/_2] relative row-[1_/_2] w-full h-fit flex flex-col items-start gap-3.5">
            <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-jade text-[19px] tracking-[0] leading-[normal]">
              Explora namii
            </h3>
            {exploreLinks.map((link) => (
              <a
                key={link}
                className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-light text-base tracking-[0] leading-[22.4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
                href="#contacto"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="flex flex-col items-start gap-[22px] pt-6 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#f8f6e438]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-light text-sm tracking-[0] leading-[19.6px]">
            © namii.mx · Todos los derechos reservados
          </p>
          <p className="relative w-fit [font-family:'Pacifico',Helvetica] font-normal text-light text-xl tracking-[0] leading-[normal]">
            Crece &amp; Conecta
          </p>
          <a
            className="inline-flex items-start gap-[22px] relative flex-[0_0_auto] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
            href="#redes-sociales"
            aria-label="Síguenos en Facebook e Instagram"
          >
            <img
              className="relative w-[84px] h-[26.67px]"
              alt="Facebook e Instagram"
              src="/img/facebook-e-instagram-2.svg"
            />
          </a>
        </div>
      </footer>
    </section>
  );
};
