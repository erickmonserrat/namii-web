import { useState } from "react";

type IconName =
  | "heart"
  | "shield"
  | "sparkle"
  | "arrow"
  | "calendar"
  | "check"
  | "plus"
  | "mail"
  | "phone";

const supportCards = [
  {
    icon: "heart" as IconName,
    title: "Acompañamiento cercano",
    description:
      "Te escuchamos, entendemos tus necesidades y caminamos contigo en cada etapa.",
    color: "bg-[#fff0e8]",
  },
  {
    icon: "shield" as IconName,
    title: "Cuidado de confianza",
    description:
      "Profesionales comprometidos con el bienestar y el desarrollo de cada niño.",
    color: "bg-[#e6fbf1]",
  },
  {
    icon: "sparkle" as IconName,
    title: "Una mirada integral",
    description:
      "Creamos experiencias que respetan los tiempos, intereses y personalidad de tu familia.",
    color: "bg-[#e8f9fb]",
  },
];

const experienceCards = [
  {
    number: "01",
    title: "Conocemos a tu familia",
    description:
      "Comenzamos con una conversación para descubrir qué necesitan y cómo podemos ayudar.",
    color: "bg-[#fff6d5]",
  },
  {
    number: "02",
    title: "Diseñamos un plan",
    description:
      "Definimos juntos objetivos claros y estrategias adaptadas a vuestra realidad.",
    color: "bg-[#e8f9fb]",
  },
  {
    number: "03",
    title: "Os acompañamos",
    description:
      "Estamos presentes durante el proceso para celebrar los avances y ajustar el camino.",
    color: "bg-[#e6fbf1]",
  },
];

const gettingStartedSteps = [
  "Reserva una primera reunión con nuestro equipo",
  "Cuéntanos vuestra historia y vuestras necesidades",
  "Recibe una propuesta personalizada para tu familia",
];

const faqs = [
  {
    question: "¿Cómo es la primera reunión?",
    answer:
      "Es una conversación tranquila y sin compromiso. Queremos conoceros, escuchar vuestras inquietudes y resolver todas vuestras dudas.",
  },
  {
    question: "¿A quiénes acompaña Namii?",
    answer:
      "Acompañamos a niños, adolescentes y sus familias con un enfoque cercano, respetuoso e individualizado.",
  },
  {
    question: "¿Dónde se realizan las sesiones?",
    answer:
      "Ofrecemos sesiones presenciales y online. En la primera conversación encontraremos la opción que mejor encaje con vosotros.",
  },
  {
    question: "¿Puedo contactar aunque todavía tenga dudas?",
    answer:
      "Por supuesto. Puedes escribirnos o reservar una llamada para hablar con nuestro equipo antes de tomar cualquier decisión.",
  },
];

const Icon = ({ name, size = 24 }: { name: IconName; size?: number }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "heart") {
    return (
      <svg {...common}>
        <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.4Z" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 21s8-3.7 8-10.2V5.2L12 2 4 5.2v5.6C4 17.3 12 21 12 21Z" />
        <path d="m8.5 11.8 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (name === "sparkle") {
    return (
      <svg {...common}>
        <path d="m12 3-1.2 4.8L6 9l4.8 1.2L12 15l1.2-4.8L18 9l-4.8-1.2L12 3Z" />
        <path d="m19 14-.6 2.4L16 17l2.4.6L19 20l.6-2.4L22 17l-2.4-.6L19 14Z" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M16 2.5v4M8 2.5v4M3 9h18" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M7.3 3.5 5 4.7c-.8.5-.9 1.5-.6 2.4 1.6 5.1 6 9.5 11.1 11.1.9.3 1.9.2 2.4-.6l1.2-2.3c.4-.7.2-1.5-.5-1.9l-2.7-1.5c-.6-.3-1.3-.2-1.7.3l-1.2 1.4a14.3 14.3 0 0 1-4.6-4.6l1.4-1.2c.5-.4.6-1.1.3-1.7L8.9 4c-.4-.7-1.2-.9-1.6-.5Z" />
      </svg>
    );
  }

  if (name === "plus") {
    return (
      <svg {...common}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 12h13M13 7l5 5-5 5" />
    </svg>
  );
};

export const HeroNavigationSection = () => (
  <header className="absolute left-0 top-0 z-20 w-full">
    <nav
      className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-6 lg:px-10"
      aria-label="Navegación principal"
    >
      <a
        href="#inicio"
        className="font-h3 text-[30px] text-indigo"
        aria-label="Namii, inicio"
      >
        namii<span className="text-papay">.</span>
      </a>
      <div className="hidden items-center gap-8 font-link text-sm text-indigo md:flex">
        <a href="#enfoque" className="transition-opacity hover:opacity-60">
          Nuestro enfoque
        </a>
        <a href="#experiencia" className="transition-opacity hover:opacity-60">
          La experiencia
        </a>
        <a href="#preguntas" className="transition-opacity hover:opacity-60">
          Preguntas frecuentes
        </a>
      </div>
      <a
        href="#contacto"
        className="rounded-full bg-indigo px-5 py-3 font-button text-sm text-white transition-transform hover:-translate-y-0.5"
      >
        Hablemos
      </a>
    </nav>
  </header>
);

export const WelcomeHeroSection = () => (
  <section id="inicio" className="relative overflow-hidden bg-light">
    <div className="mx-auto grid min-h-[650px] max-w-[1180px] items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:pt-28">
      <div className="relative z-10 max-w-[570px]">
        <p className="mb-5 font-pretitle uppercase tracking-[0.18em] text-darck-blue">
          Acompañamiento para familias
        </p>
        <h1 className="font-title-h1 text-[50px] leading-[1.12] text-indigo sm:text-[64px]">
          Criar también es <span className="text-papay">aprender.</span>
        </h1>
        <p className="mt-7 max-w-[490px] font-body text-lg leading-7 text-textbody">
          Un espacio para comprender, acompañar y disfrutar el desarrollo de tus
          hijos con más calma y confianza.
        </p>
        <a
          href="#contacto"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-papay px-7 py-4 font-button text-indigo transition-transform hover:-translate-y-1"
        >
          Reserva una primera conversación <Icon name="arrow" size={19} />
        </a>
      </div>
      <div className="relative flex min-h-[360px] items-center justify-center">
        <div className="absolute h-[310px] w-[310px] rounded-full bg-jade sm:h-[390px] sm:w-[390px]" />
        <div className="relative flex h-[280px] w-[280px] rotate-[-5deg] items-center justify-center rounded-[48%_52%_45%_55%] bg-turquoise shadow-[12px_18px_0_rgba(14,14,44,0.08)] sm:h-[350px] sm:w-[350px]">
          <span className="max-w-[210px] text-center font-h3 text-[29px] leading-tight text-white">
            Un lugar para crecer juntos
          </span>
        </div>
        <div className="absolute bottom-3 right-4 rounded-2xl bg-white px-5 py-4 shadow-alert-shadow sm:right-12">
          <span className="block font-pretitle uppercase text-textsubtle">
            Nuestro deseo
          </span>
          <span className="font-bold text-indigo">Familias conectadas</span>
        </div>
      </div>
    </div>
  </section>
);

export const LandingIntroductionSection = () => (
  <section className="bg-white px-6 py-20 text-center lg:py-28">
    <div className="mx-auto max-w-[760px]">
      <p className="font-pretitle uppercase tracking-[0.18em] text-papay">
        Bienvenidos a Namii
      </p>
      <h2 className="mt-4 font-h2 text-[36px] leading-tight text-indigo sm:text-[42px]">
        No hay una única forma de hacerlo bien
      </h2>
      <p className="mt-6 font-body text-lg leading-8 text-textbody">
        Cada familia tiene su propia historia. En Namii te ofrecemos
        herramientas, escucha y acompañamiento para que encuentres vuestro
        propio camino.
      </p>
    </div>
  </section>
);

export const CareApproachSection = () => (
  <section id="enfoque" className="bg-indigo px-6 py-20 text-white lg:py-24">
    <div className="mx-auto max-w-[1080px] text-center">
      <p className="font-pretitle uppercase tracking-[0.18em] text-jade">
        Nuestro enfoque
      </p>
      <h2 className="mt-4 font-h2 text-[36px] sm:text-[42px]">
        Cuidar desde la comprensión
      </h2>
      <p className="mx-auto mt-5 max-w-[650px] font-body leading-7 text-white/75">
        Ponemos en el centro a las personas, sus vínculos y todo aquello que
        hace única a cada familia.
      </p>
    </div>
  </section>
);

export const CareApproachOverviewSection = () => (
  <section className="bg-indigo px-6 pb-10 text-white">
    <div className="mx-auto grid max-w-[1080px] gap-5 sm:grid-cols-3">
      {["Escucha", "Respeto", "Confianza"].map((item, index) => (
        <div
          key={item}
          className="rounded-3xl border border-white/15 p-7 text-center"
        >
          <span className="font-h3 text-[27px] text-jade">0{index + 1}</span>
          <h3 className="mt-3 font-subtitle text-xl">{item}</h3>
        </div>
      ))}
    </div>
  </section>
);

export const SupportApproachCardsSection = () => (
  <section className="bg-light px-6 py-20 lg:py-24">
    <div className="mx-auto grid max-w-[1080px] gap-6 md:grid-cols-3">
      {supportCards.map((card) => (
        <article key={card.title} className={`${card.color} rounded-3xl p-8`}>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-indigo">
            <Icon name={card.icon} size={28} />
          </div>
          <h3 className="mt-7 font-h3 text-[26px] text-indigo">{card.title}</h3>
          <p className="mt-3 font-body leading-7 text-textbody">
            {card.description}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export const ChildcareExperienceSection = () => (
  <section
    id="experiencia"
    className="bg-white px-6 pt-20 text-center lg:pt-28"
  >
    <p className="font-pretitle uppercase tracking-[0.18em] text-turquoise">
      La experiencia Namii
    </p>
    <h2 className="mx-auto mt-4 max-w-[680px] font-h2 text-[36px] leading-tight text-indigo sm:text-[42px]">
      Un proceso pensado para vosotros
    </h2>
  </section>
);

export const ChildcareExperienceOverviewSection = () => (
  <section className="bg-white px-6 pb-8 pt-10 text-center">
    <p className="mx-auto max-w-[620px] font-body text-textbody">
      Paso a paso, construimos un acompañamiento que se adapta a vuestras
      necesidades y evoluciona con vosotros.
    </p>
  </section>
);

export const ChildcareExperienceCardsSection = () => (
  <section className="bg-white px-6 py-12 lg:py-20">
    <div className="mx-auto grid max-w-[1080px] gap-6 md:grid-cols-3">
      {experienceCards.map((card) => (
        <article key={card.number} className={`${card.color} rounded-3xl p-8`}>
          <span className="font-h2 text-[42px] text-indigo/30">
            {card.number}
          </span>
          <h3 className="mt-4 font-h3 text-[26px] leading-tight text-indigo">
            {card.title}
          </h3>
          <p className="mt-3 font-body leading-7 text-textbody">
            {card.description}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export const GettingStartedOverviewSection = () => (
  <section className="bg-[#e8f9fb] px-6 pt-20 text-center">
    <p className="font-pretitle uppercase tracking-[0.18em] text-darck-blue">
      Empezar es fácil
    </p>
    <h2 className="mt-4 font-h2 text-[36px] text-indigo sm:text-[42px]">
      Tu primer paso empieza aquí
    </h2>
  </section>
);

export const GettingStartedGuideSection = () => (
  <section className="bg-[#e8f9fb] px-6 py-8 text-center">
    <p className="mx-auto max-w-[600px] font-body leading-7 text-textbody">
      No tienes que tener todas las respuestas. Solo necesitas un espacio para
      empezar a hablar.
    </p>
  </section>
);

export const GettingStartedStepsSection = () => (
  <section className="bg-[#e8f9fb] px-6 py-12 lg:py-20">
    <div className="mx-auto grid max-w-[850px] gap-4">
      {gettingStartedSteps.map((step, index) => (
        <div
          key={step}
          className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-jade font-button text-indigo">
            {index + 1}
          </span>
          <p className="font-bold text-indigo">{step}</p>
          <Icon name="check" size={20} />
        </div>
      ))}
    </div>
  </section>
);

export const FrequentlyAskedQuestionsOverviewSection = () => (
  <section id="preguntas" className="bg-light px-6 pt-20 text-center">
    <p className="font-pretitle uppercase tracking-[0.18em] text-papay">
      Preguntas frecuentes
    </p>
    <h2 className="mt-4 font-h2 text-[36px] text-indigo sm:text-[42px]">
      Queremos que estés tranquilo
    </h2>
  </section>
);

export const FrequentlyAskedQuestionsSection = () => (
  <section className="bg-light px-6 pb-5 pt-6 text-center">
    <p className="mx-auto max-w-[600px] font-body leading-7 text-textbody">
      Estas son algunas de las preguntas que recibimos con más frecuencia.
    </p>
  </section>
);

export const FrequentlyAskedQuestionsAccordionSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <section className="bg-light px-6 py-10 lg:py-20">
      <div className="mx-auto max-w-[800px]">
        {faqs.map((faq, index) => {
          const isOpen = openQuestion === index;
          return (
            <div key={faq.question} className="border-b border-indigo/15">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-5 py-6 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenQuestion(isOpen ? null : index)}
              >
                <span className="font-bold text-indigo">{faq.question}</span>
                <span
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  <Icon name="plus" size={22} />
                </span>
              </button>
              {isOpen && (
                <p className="max-w-[650px] pb-6 font-body leading-7 text-textbody">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export const FirstMeetingBookingSection = () => (
  <section id="contacto" className="bg-papay px-6 py-20 lg:py-24">
    <div className="mx-auto flex max-w-[1000px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
      <div className="max-w-[570px]">
        <p className="font-pretitle uppercase tracking-[0.18em] text-indigo/60">
          Da el primer paso
        </p>
        <h2 className="mt-4 font-h2 text-[36px] leading-tight text-indigo sm:text-[44px]">
          Hablemos de lo que necesitáis
        </h2>
        <p className="mt-5 font-body text-lg leading-7 text-indigo/75">
          Reserva una primera reunión gratuita y conoce cómo podemos
          acompañarte.
        </p>
      </div>
      <a
        href="mailto:hola@namii.es"
        className="inline-flex shrink-0 items-center gap-3 rounded-full bg-indigo px-7 py-4 font-button text-white transition-transform hover:-translate-y-1"
      >
        <Icon name="calendar" size={20} /> Reservar reunión
      </a>
    </div>
  </section>
);

export const ContactCallToActionSection = () => (
  <section className="bg-white px-6 py-12 text-center">
    <a
      href="mailto:hola@namii.es"
      className="font-link text-darck-blue underline underline-offset-4"
    >
      También puedes escribirnos directamente
    </a>
  </section>
);

export const MeetingAndFooterSection = () => (
  <section className="bg-indigo px-6 py-12 text-center text-white">
    <p className="font-h3 text-[28px]">Estamos aquí para escucharte.</p>
  </section>
);

export const SiteFooterSection = () => (
  <footer className="w-full bg-indigo px-6 pb-8 pt-10 text-white">
    <div className="mx-auto flex max-w-[1080px] flex-col justify-between gap-8 border-b border-white/15 pb-8 sm:flex-row">
      <a href="#inicio" className="font-h3 text-[30px]">
        namii<span className="text-papay">.</span>
      </a>
      <div className="flex flex-col gap-3 font-small text-white/70 sm:text-right">
        <a
          href="mailto:hola@namii.es"
          className="flex items-center gap-2 sm:justify-end"
        >
          <Icon name="mail" size={17} /> hola@namii.es
        </a>
        <a
          href="tel:+34900000000"
          className="flex items-center gap-2 sm:justify-end"
        >
          <Icon name="phone" size={17} /> +34 900 000 000
        </a>
      </div>
    </div>
    <div className="mx-auto flex max-w-[1080px] justify-between pt-6 font-small text-white/50">
      <span>© 2024 Namii</span>
      <span>Hecho con cuidado</span>
    </div>
  </footer>
);

export const NamiiInicio = (): JSX.Element => {
  return (
    <main
      className="relative flex min-h-screen flex-col overflow-x-hidden bg-white"
      data-model-id="509:3235"
    >
      <HeroNavigationSection />
      <WelcomeHeroSection />
      <LandingIntroductionSection />
      <CareApproachSection />
      <CareApproachOverviewSection />
      <SupportApproachCardsSection />
      <ChildcareExperienceSection />
      <ChildcareExperienceOverviewSection />
      <ChildcareExperienceCardsSection />
      <GettingStartedOverviewSection />
      <GettingStartedGuideSection />
      <GettingStartedStepsSection />
      <FrequentlyAskedQuestionsOverviewSection />
      <FrequentlyAskedQuestionsSection />
      <FrequentlyAskedQuestionsAccordionSection />
      <FirstMeetingBookingSection />
      <ContactCallToActionSection />
      <MeetingAndFooterSection />
      <SiteFooterSection />
    </main>
  );
};
