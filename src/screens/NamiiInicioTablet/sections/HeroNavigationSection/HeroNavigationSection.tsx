import { useState } from "react";

const navigationItems = [
  { label: "Nuestro enfoque", href: "#nuestro-enfoque" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Cómo empezar", href: "#como-empezar" },
  { label: "Preguntas", href: "#preguntas" },
];

const carouselPages = [1, 2, 3];

export const HeroNavigationSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  const showPreviousPage = (): void => {
    setCurrentPage((page) => (page === 1 ? carouselPages.length : page - 1));
  };

  const showNextPage = (): void => {
    setCurrentPage((page) => (page === carouselPages.length ? 1 : page + 1));
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-white"
    >
      <header className="flex flex-col items-start gap-5 pt-6 pb-4 px-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <a
            href="/"
            aria-label="Namii, inicio"
            className="flex flex-col w-[180.04px] items-end gap-[7.86px] relative"
          >
            <img
              className="relative w-[180.04px] h-[53.92px]"
              alt="Capa"
              src="/img/capa-4-2.png"
            />
            <img
              className="relative w-[92.48px] h-[7.46px]"
              alt="Group"
              src="/img/group-2.png"
            />
          </a>
          <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
            <a
              href="#agenda"
              className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-playing-yellow rounded-[100px] overflow-hidden"
            >
              <span className="h-6 inline-flex items-center gap-2 relative">
                <span className="relative flex items-center w-fit font-bold font-[number:var(--bold-font-weight)] text-indigo text-[length:var(--bold-font-size)] tracking-[var(--bold-letter-spacing)] leading-[var(--bold-line-height)] [font-style:var(--bold-font-style)]">
                  Agenda tu clase
                </span>
              </span>
            </a>
            <img
              className="relative w-6 h-6"
              alt=""
              aria-hidden="true"
              src="/img/men-1.svg"
            />
          </div>
        </div>
        <nav
          aria-label="Navegación principal"
          className="flex items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex flex-col items-start p-2 relative flex-[0_0_auto] bg-[#ffffff1a] rounded"
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-bold text-[#05263f] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </header>
      <div className="flex items-center gap-6 pt-10 pb-6 px-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-5 relative flex-1 grow">
          <h1
            id="hero-title"
            className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-normal text-transparent text-5xl tracking-[-1.44px] leading-[54.2px]"
          >
            <span className="font-bold text-[#05263f] tracking-[-0.69px]">
              experiencia
              <br />
            </span>
            <span className="[font-family:'Pacifico',Helvetica] text-[#2fcf93] tracking-[-0.69px]">
              Crecer
            </span>
          </h1>
          <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-lg tracking-[0] leading-[27px]">
            Un espacio para jugar, explorar y descubrir mientras fortalece sus
            habilidades.
          </p>
          <div className="flex flex-wrap items-start gap-[8px_8px] relative self-stretch w-full flex-[0_0_auto]">
            <a
              href="#agenda"
              className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-[#2fcf93] rounded-[100px] overflow-hidden"
            >
              <span className="h-6 inline-flex items-center gap-2 relative">
                <span className="font-bold text-white tracking-[var(--bold-letter-spacing)] relative flex items-center w-fit font-[number:var(--bold-font-weight)] text-[length:var(--bold-font-size)] leading-[var(--bold-line-height)] [font-style:var(--bold-font-style)]">
                  Quiero mi clase
                </span>
              </span>
            </a>
            <a
              href="#nuestro-enfoque"
              className="inline-flex flex-col items-center gap-2 px-[18px] py-3 relative flex-[0_0_auto] rounded-[80px] overflow-hidden shadow-[inset_0px_-1px_0.5px_#0e0e2c66]"
            >
              <span className="h-6 inline-flex items-center gap-2 relative">
                <span className="font-bold text-[#2fcf93] tracking-[var(--bold-letter-spacing)] relative flex items-center w-fit font-[number:var(--bold-font-weight)] text-[length:var(--bold-font-size)] leading-[var(--bold-line-height)] [font-style:var(--bold-font-style)]">
                  Conocer más
                </span>
              </span>
            </a>
          </div>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <span
              aria-hidden="true"
              className="relative w-[7px] h-[7px] bg-[#2fcf93] rounded-[3.5px]"
            />
            <span className="relative w-fit mt-[-1.00px] font-small font-[number:var(--small-font-weight)] text-[#486071] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] whitespace-nowrap [font-style:var(--small-font-style)]">
              Clase muestra gratis
            </span>
          </div>
        </div>
        <div
          role="img"
          aria-label="Niño disfrutando una clase de Namii"
          className="flex flex-col w-[356px] h-[360px] items-center relative rounded-[110px] overflow-hidden"
        >
          <div className="relative flex-1 self-stretch w-full grow bg-[url(/img/image-1.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>
      <div
        aria-label="Controles del carrusel"
        className="flex h-[88px] items-center justify-center relative self-stretch w-full"
      >
        <div className="inline-flex h-[53px] items-center gap-4 relative flex-[0_0_auto]">
          <button
            type="button"
            onClick={showPreviousPage}
            aria-label="Ver página anterior"
            className="relative w-9 h-9"
          >
            <img
              className="relative w-9 h-9"
              alt=""
              aria-hidden="true"
              src="/img/fi-rr-angle-left-1.svg"
            />
          </button>
          <div
            aria-live="polite"
            className="flex-col px-6 py-3 flex-[0_0_auto] bg-light rounded-[80px] overflow-hidden shadow-[0px_6px_2px_-4px_#0e0e2c1a,inset_0px_-1px_0px_#0e0e2c66] inline-flex items-center gap-2 relative"
          >
            <span className="h-6 inline-flex items-center gap-2 relative">
              <span className="font-button text-darck-blue tracking-[var(--button-letter-spacing)] relative flex items-center w-fit font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                {currentPage} de {carouselPages.length}
              </span>
            </span>
          </div>
          <button
            type="button"
            onClick={showNextPage}
            aria-label="Ver página siguiente"
            className="relative w-9 h-9"
          >
            <img
              className="relative w-9 h-9"
              alt=""
              aria-hidden="true"
              src="/img/fi-rr-angle-right-1.svg"
            />
          </button>
        </div>
      </div>
      <img
        className="relative self-stretch w-full h-10"
        alt="Onda decorativa"
        src="/img/onda-2.svg"
      />
    </section>
  );
};
