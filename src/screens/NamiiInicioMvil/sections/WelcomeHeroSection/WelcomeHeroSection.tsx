import { useState } from "react";

const navigationItems = [
  { label: "Nuestro enfoque", href: "#nuestro-enfoque" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Cómo empezar", href: "#como-empezar" },
  { label: "Preguntas", href: "#preguntas" },
];

const carouselSlides = [
  {
    id: 1,
    image: "/img/image.png",
    alt: "Experiencia de aprendizaje para niños",
  },
  { id: 2, image: "/img/image.png", alt: "Niño disfrutando una clase" },
  {
    id: 3,
    image: "/img/image.png",
    alt: "Actividad de aprendizaje y exploración",
  },
];

export const WelcomeHeroSection = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToPreviousSlide = (): void => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? carouselSlides.length - 1 : currentSlide - 1,
    );
  };

  const goToNextSlide = (): void => {
    setActiveSlide((currentSlide) =>
      currentSlide === carouselSlides.length - 1 ? 0 : currentSlide + 1,
    );
  };

  const currentSlide = carouselSlides[activeSlide];

  return (
    <section
      aria-label="Bienvenida a Namii"
      className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-white"
    >
      <header className="flex flex-col items-start gap-5 pt-6 pb-4 px-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <a
            href="/"
            aria-label="Namii, inicio"
            className="flex flex-col w-[119.9px] items-end gap-[5.24px] relative"
          >
            <img
              className="relative w-[119.9px] h-[35.91px]"
              alt="Capa"
              src="/img/capa-4.png"
            />
            <img
              className="relative w-[61.59px] h-[4.97px]"
              alt="Group"
              src="/img/group.png"
            />
          </a>
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <a
              href="#agenda"
              className="px-4 py-3 bg-playing-yellow inline-flex flex-col items-center gap-2 relative flex-[0_0_auto] rounded-[100px] overflow-hidden"
            >
              <span className="h-6 inline-flex items-center gap-2 relative">
                <span className="relative flex items-center w-fit font-bold font-[number:var(--bold-font-weight)] text-indigo text-[length:var(--bold-font-size)] tracking-[var(--bold-letter-spacing)] leading-[var(--bold-line-height)] [font-style:var(--bold-font-style)]">
                  Agenda tu clase
                </span>
              </span>
            </a>
            <button
              type="button"
              aria-label="Abrir menú"
              className="relative w-6 h-6"
            >
              <img
                className="relative w-6 h-6"
                alt="Men"
                src="/img/men-1.svg"
              />
            </button>
          </div>
        </div>
        <nav
          aria-label="Navegación principal"
          className="flex flex-wrap items-start justify-center gap-[4px_16px] relative self-stretch w-full flex-[0_0_auto]"
        >
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex flex-col items-start p-2 relative flex-[0_0_auto] bg-[#ffffff1a] rounded"
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-bold text-[#05263f] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </header>
      <div className="flex flex-col items-start justify-center gap-8 pt-7 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-normal text-transparent text-[46px] tracking-[-1.38px] leading-[52.0px]">
            <span className="font-bold text-[#05263f] tracking-[-0.63px]">
              experiencia
              <br />
            </span>
            <span className="[font-family:'Pacifico',Helvetica] text-[#2fcf93] tracking-[-0.63px]">
              Crecer
            </span>
          </h1>
          <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-lg tracking-[0] leading-[27px]">
            Un espacio para jugar, explorar y descubrir mientras fortalece sus
            habilidades.
          </p>
          <div className="flex flex-wrap items-start gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
            <a
              href="#agenda"
              className="px-6 py-3 bg-[#2fcf93] inline-flex flex-col items-center gap-2 relative flex-[0_0_auto] rounded-[100px] overflow-hidden"
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
          className="flex flex-col w-[342px] h-[310px] items-center relative rounded-[100px] overflow-hidden"
          role="img"
          aria-label={currentSlide.alt}
        >
          <div
            className="relative flex-1 self-stretch w-full grow bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />
        </div>
      </div>
      <div className="flex h-[88px] items-center justify-center relative self-stretch w-full">
        <div className="inline-flex h-[53px] items-center gap-4 relative flex-[0_0_auto]">
          <button
            type="button"
            aria-label="Experiencia anterior"
            onClick={goToPreviousSlide}
            className="relative w-9 h-9"
          >
            <img
              className="relative w-9 h-9"
              alt=""
              aria-hidden="true"
              src="/img/fi-rr-angle-left.svg"
            />
          </button>
          <div
            aria-live="polite"
            className="flex-col px-6 py-3 flex-[0_0_auto] bg-light rounded-[80px] overflow-hidden shadow-[0px_6px_2px_-4px_#0e0e2c1a,inset_0px_-1px_0px_#0e0e2c66] inline-flex items-center gap-2 relative"
          >
            <span className="h-6 inline-flex items-center gap-2 relative">
              <span className="font-button text-darck-blue tracking-[var(--button-letter-spacing)] relative flex items-center w-fit font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
                {activeSlide + 1} de {carouselSlides.length}
              </span>
            </span>
          </div>
          <button
            type="button"
            aria-label="Siguiente experiencia"
            onClick={goToNextSlide}
            className="relative w-9 h-9"
          >
            <img
              className="relative w-9 h-9"
              alt=""
              aria-hidden="true"
              src="/img/fi-rr-angle-right.svg"
            />
          </button>
        </div>
      </div>
      <img
        className="relative self-stretch w-full h-6"
        alt="Onda"
        src="/img/onda.svg"
      />
    </section>
  );
};
