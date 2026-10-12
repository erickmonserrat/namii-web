const exploreLinks = [
  { label: "Nuestro enfoque", href: "#nuestro-enfoque" },
  { label: "Nuestras experiencias", href: "#nuestras-experiencias" },
  { label: "Cómo empezar", href: "#como-empezar" },
];

const experienceLinks = [
  { label: "Crece", href: "#crece" },
  { label: "Conecta", href: "#conecta" },
  { label: "Post vacuna", href: "#post-vacuna" },
  { label: "Clase muestra gratis", href: "#clase-muestra-gratis" },
];

const conversationLinks = [
  { label: "Agenda tu visita", href: "#agenda-tu-visita" },
  { label: "Preguntas frecuentes", href: "#preguntas-frecuentes" },
];

const footerNavigation = [
  {
    title: "Explora namii",
    links: exploreLinks,
  },
  {
    title: "Experiencias",
    links: experienceLinks,
  },
  {
    title: "Conversemos",
    links: conversationLinks,
  },
];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-start gap-[46px] pt-16 pb-7 px-[88px] relative self-stretch w-full flex-[0_0_auto] bg-[#05263f]">
      <div className="flex items-start gap-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[430px] items-start gap-[22px] relative">
          <div className="flex flex-col w-[205px] items-end gap-[8.95px] relative flex-[0_0_auto]">
            <img
              className="relative w-[205px] h-[61.4px]"
              alt="Capa"
              src="/img/capa-4-5.png"
            />
            <img
              className="relative w-[105.3px] h-[8.49px]"
              alt="Group"
              src="/img/group-5.png"
            />
          </div>
          <p className="relative w-[370px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#f8f6e4] text-lg tracking-[0] leading-[27px]">
            Un espacio para descubrir el mundo.
            <br />
            Un momento para hacerlo juntos.
          </p>
        </div>
        {footerNavigation.map((section) => (
          <nav
            key={section.title}
            aria-label={section.title}
            className="flex flex-col items-start gap-3.5 relative flex-1 grow"
          >
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#5cf2ab] text-[19px] tracking-[0] leading-[normal]">
              {section.title}
            </h2>
            <ul className="flex flex-col items-start gap-3.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-normal text-[#f8f6e4] text-base tracking-[0] leading-[normal] hover:underline focus-visible:underline focus-visible:outline-none"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="flex items-center justify-between pt-[22px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#f8f6e438]">
        <div className="flex w-[84px] items-center gap-2.5 relative">
          <p className="relative w-fit mt-[-1.00px] mr-[-192.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#f8f6e4] text-sm tracking-[0] leading-[normal]">
            © namii.mx · Todos los derechos reservados
          </p>
        </div>
        <p className="relative w-fit mt-[-1.00px] [font-family:'Pacifico',Helvetica] font-normal text-[#f8f6e4] text-xl tracking-[0] leading-[normal]">
          Crece &amp; Conecta
        </p>
        <div className="inline-flex items-start gap-[22px] relative flex-[0_0_auto]">
          <a
            href="#redes-sociales"
            aria-label="Visita nuestras redes sociales"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5cf2ab] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05263f]"
          >
            <img
              className="relative w-[84px] h-[26.67px]"
              alt="Facebook e instagram"
              src="/img/facebook-e-instagram-2.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
