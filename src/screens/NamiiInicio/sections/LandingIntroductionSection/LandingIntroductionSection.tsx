import { useState } from "react";

const navigationItems = [
  { label: "Nuestro enfoque", href: "#nuestro-enfoque" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Cómo empezar", href: "#como-empezar" },
  { label: "Preguntas", href: "#preguntas" },
];

const slides = [1, 2, 3];

export const LandingIntroductionSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = (): void => {
    setCurrentSlide((slide) => (slide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = (): void => {
    setCurrentSlide((slide) => (slide + 1) % slides.length);
  };

  return (
    <section
      aria-label="Introducción de Namii"
      className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff]"
    >
      <header className="flex items-center justify-between px-[88px] py-7 relative self-stretch w-full flex-[0_0_auto]">
        <a
          href="/"
          aria-label="Namii, inicio"
          className="flex flex-col w-[180px] items-end gap-[7.86px] relative"
        >
          <img
            className="relative w-[180px] h-[53.91px]"
            alt="Namii"
            src="/img/capa-4-4.png"
          />
          <img
            className="relative w-[92.46px] h-[7.46px]"
            alt=""
            aria-hidden="true"
            src="/img/group-4.png"
          />
        </a>
        <nav aria-label="Navegación principal">
          <ul className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex flex-col items-start p-2 relative flex-[0_0_auto] bg-[#ffffff1a] rounded [font-family:'Nunito_Sans',Helvetica] font-bold text-[#05263f] text-base tracking-[0] leading-[22.4px] whitespace-nowrap transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2fcf93]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#agenda"
          className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-playing-yellow rounded-[100px] overflow-hidden transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05263f]"
        >
          <span className="h-6 inline-flex items-center gap-2 relative">
            <span className="relative flex items-center w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-extrabold text-indigo text-[17px] tracking-[0] leading-[normal]">
              Agenda tu clase
            </span>
          </span>
        </a>
      </header>
      <div className="flex h-[645px] items-center gap-[58px] pt-[34px] pb-16 px-[88px] relative self-stretch w-full">
        <div className="flex flex-col w-[600px] items-start gap-6 relative">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-normal text-transparent text-[66px] tracking-[-1.98px] leading-[74.6px]">
            <span className="font-bold text-[#05263f] tracking-[-1.31px]">
              experiencia
              <br />
            </span>
            <span className="[font-family:'Pacifico',Helvetica] text-[#2fcf93] tracking-[-1.31px]">
              Crecer
            </span>
          </h1>
          <p className="font-normal text-xl leading-[30px] relative self-stretch [font-family:'Nunito_Sans',Helvetica] text-[#486071] tracking-[0]">
            Un espacio para jugar, explorar y descubrir mientras fortalece sus
            habilidades.
          </p>
          <div className="inline-flex items-start gap-3.5 relative flex-[0_0_auto]">
            <a
              href="#agenda"
              className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-[#2fcf93] rounded-[100px] overflow-hidden transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05263f]"
            >
              <span className="h-6 inline-flex items-center gap-2 relative">
                <span className="mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-extrabold text-white text-[17px] tracking-[0] relative flex items-center w-fit leading-[normal]">
                  Quiero mi clase
                </span>
              </span>
            </a>
            <a
              href="#nuestro-enfoque"
              className="flex-col px-6 py-3 flex-[0_0_auto] rounded-[80px] overflow-hidden shadow-[inset_0px_-1px_0.5px_#0e0e2c66] inline-flex items-center gap-2 relative transition-colors hover:bg-[#f8f6e4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2fcf93]"
            >
              <span className="h-6 inline-flex items-center gap-2 relative">
                <span className="font-button font-[number:var(--button-font-weight)] text-[#2fcf93] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] relative flex items-center w-fit leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                  Conocer más
                </span>
              </span>
            </a>
          </div>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <span
              aria-hidden="true"
              className="relative w-[9px] h-[9px] bg-[#2fcf93] rounded-[4.5px]"
            />
            <span className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-[15px] tracking-[0] leading-[normal]">
              Clase muestra gratis
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[606px] h-[576px] items-start relative mt-[-14.50px] mb-[-14.50px]">
          <div
            className="flex flex-col w-[606px] h-[550px] items-center relative rounded-[180px] overflow-hidden"
            role="img"
            aria-label="Niño disfrutando de una experiencia Namii"
          >
            <div className="relative flex-1 self-stretch w-full grow bg-[url(/img/image-2.png)] bg-cover bg-[50%_50%]" />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col h-[98px] items-center justify-center gap-2.5 relative self-stretch w-full"
        aria-label="Controles del carrusel"
      >
        <div className="inline-flex h-[53px] items-center gap-4 relative">
          <button
            type="button"
            onClick={goToPreviousSlide}
            aria-label="Experiencia anterior"
            className="relative w-9 h-9 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2fcf93]"
          >
            <img
              className="relative w-9 h-9"
              alt=""
              aria-hidden="true"
              src="/img/fi-rr-angle-left-2.svg"
            />
          </button>
          <div className="flex-col px-6 py-3 flex-[0_0_auto] bg-light rounded-[80px] overflow-hidden shadow-[0px_6px_2px_-4px_#0e0e2c1a,inset_0px_-1px_0px_#0e0e2c66] inline-flex items-center gap-2 relative">
            <span className="h-6 inline-flex items-center gap-2 relative">
              <span className="font-button font-[number:var(--button-font-weight)] text-darck-blue text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] relative flex items-center w-fit leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                {currentSlide + 1} de {slides.length}
              </span>
            </span>
          </div>
          <button
            type="button"
            onClick={goToNextSlide}
            aria-label="Siguiente experiencia"
            className="relative w-9 h-9 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2fcf93]"
          >
            <img
              className="relative w-9 h-9"
              alt=""
              aria-hidden="true"
              src="/img/fi-rr-angle-right-2.svg"
            />
          </button>
        </div>
      </div>
      <img
        className="relative w-[1440px] h-[60px]"
        alt=""
        aria-hidden="true"
        src="/img/onda-4.svg"
      />
    </section>
  );
};
