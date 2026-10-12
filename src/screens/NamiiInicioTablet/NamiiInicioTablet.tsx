import { useState } from "react";

const careApproaches = [
  {
    title: "Cuidado con propósito",
    text: "Acompañamos cada etapa del desarrollo con cariño, respeto y atención personalizada.",
    icon: "♡",
    color: "bg-jade",
  },
  {
    title: "Familias tranquilas",
    text: "Creamos una red de apoyo para que puedas disfrutar cada momento de la crianza.",
    icon: "✦",
    color: "bg-playing-yellow",
  },
  {
    title: "Profesionales expertos",
    text: "Nuestro equipo está preparado para ofrecerte orientación confiable y cercana.",
    icon: "◎",
    color: "bg-turquoise",
  },
];

const childcareExperiences = [
  {
    title: "Conoce a tu bebé",
    text: "Entiende sus necesidades, señales y formas únicas de comunicarse contigo.",
    icon: "☼",
  },
  {
    title: "Acompaña su crecimiento",
    text: "Encuentra herramientas prácticas para cada nueva etapa de desarrollo.",
    icon: "♡",
  },
  {
    title: "Disfruta el camino",
    text: "Vive la maternidad y paternidad con más confianza, calma y conexión.",
    icon: "✿",
  },
];

const gettingStartedSteps = [
  {
    number: "01",
    title: "Cuéntanos sobre ti",
    text: "Completa nuestro breve formulario para conocerte mejor.",
  },
  {
    number: "02",
    title: "Agenda tu primera sesión",
    text: "Elige el día y horario que mejor se adapte a tu familia.",
  },
  {
    number: "03",
    title: "Comienza tu experiencia",
    text: "Recibe orientación personalizada desde el primer encuentro.",
  },
];

const faqs = [
  {
    question: "¿Qué es Namii?",
    answer:
      "Namii es un espacio de acompañamiento para familias. Te brindamos información, herramientas y apoyo profesional para vivir la crianza con mayor confianza.",
  },
  {
    question: "¿A quiénes acompaña Namii?",
    answer:
      "Acompañamos a madres, padres y cuidadores desde el embarazo y durante las distintas etapas de crecimiento de sus hijos.",
  },
  {
    question: "¿Cómo puedo comenzar?",
    answer:
      "Puedes comenzar agendando una primera reunión. En ella conoceremos tus necesidades y definiremos juntos el mejor camino.",
  },
  {
    question: "¿Las sesiones son online o presenciales?",
    answer:
      "Contamos con alternativas online y presenciales para que puedas elegir la modalidad más cómoda para tu familia.",
  },
];

const Arrow = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-6-6 6 6-6 6"
    />
  </svg>
);

const Heart = () => (
  <svg
    aria-hidden="true"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
    />
  </svg>
);

export const HeroNavigationSection = (): JSX.Element => {
  return (
    <header
      className="relative overflow-hidden bg-light"
      data-model-id="hero-navigation"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-12"
        aria-label="Navegación principal"
      >
        <a
          href="#inicio"
          className="font-h3 text-3xl text-indigo"
          aria-label="Namii, inicio"
        >
          namii
        </a>
        <div className="hidden items-center gap-8 font-link text-sm text-indigo md:flex">
          <a href="#conocenos" className="transition-opacity hover:opacity-60">
            Conócenos
          </a>
          <a
            href="#experiencia"
            className="transition-opacity hover:opacity-60"
          >
            Experiencia
          </a>
          <a href="#preguntas" className="transition-opacity hover:opacity-60">
            Preguntas frecuentes
          </a>
        </div>
        <a
          href="#comenzar"
          className="rounded-full bg-indigo px-5 py-3 font-button text-sm text-white transition-transform hover:scale-105"
        >
          Comenzar
        </a>
      </nav>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-12 md:grid-cols-2 md:pb-28 md:pt-20 lg:px-12">
        <div id="inicio">
          <p className="mb-5 font-pretitle uppercase tracking-widest text-darck-blue">
            Acompañamiento para familias
          </p>
          <h1 className="max-w-xl font-title-h1 text-5xl leading-tight text-indigo md:text-7xl">
            Criar también puede sentirse ligero
          </h1>
          <p className="mt-7 max-w-lg font-body text-lg leading-7 text-textbody">
            En Namii te acompañamos a construir una crianza conectada, informada
            y llena de confianza.
          </p>
          <a
            href="#comenzar"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-papay px-6 py-4 font-button text-indigo transition-transform hover:scale-105"
          >
            Conoce Namii <Arrow />
          </a>
        </div>
        <div className="relative mx-auto flex h-72 w-full max-w-md items-center justify-center rounded-[45%] bg-jade md:h-96">
          <div className="absolute -right-3 top-7 flex h-16 w-16 items-center justify-center rounded-full bg-playing-yellow text-3xl">
            ✦
          </div>
          <div className="absolute -bottom-3 left-8 flex h-20 w-20 items-center justify-center rounded-full bg-papay text-3xl">
            ♡
          </div>
          <div className="text-center text-indigo">
            <Heart />
            <p className="mt-3 font-h3 text-3xl">crecer juntos</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export const CareApproachSection = (): JSX.Element => {
  return (
    <section
      id="conocenos"
      className="bg-white px-6 py-20 lg:px-12"
      data-model-id="care-approach"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-pretitle uppercase tracking-widest text-darck-blue">
            Nuestra mirada
          </p>
          <h2 className="mt-3 font-h2 text-4xl text-indigo md:text-5xl">
            Un cuidado que se adapta a tu familia
          </h2>
          <p className="mt-5 font-body leading-7 text-textbody">
            No existe una única manera de criar. Por eso, escuchamos tu historia
            y te acompañamos desde tus propias necesidades.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {careApproaches.map((approach) => (
            <article
              key={approach.title}
              className={`rounded-3xl p-7 ${approach.color} min-h-56 transition-transform hover:-translate-y-1`}
            >
              <span className="text-4xl text-indigo" aria-hidden="true">
                {approach.icon}
              </span>
              <h3 className="mt-8 font-h3 text-2xl text-indigo">
                {approach.title}
              </h3>
              <p className="mt-3 font-body leading-6 text-indigo/80">
                {approach.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CareApproachOverviewSection = (): JSX.Element => (
  <div data-model-id="care-approach-overview">
    <CareApproachSection />
  </div>
);

export const ChildcareExperienceSection = (): JSX.Element => {
  return (
    <section
      id="experiencia"
      className="bg-indigo px-6 py-20 text-white lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <p className="font-pretitle uppercase tracking-widest text-jade">
            Tu experiencia
          </p>
          <h2 className="mt-3 font-h2 text-4xl leading-tight md:text-5xl">
            La crianza se vive mejor acompañado
          </h2>
          <p className="mt-6 font-body leading-7 text-white/75">
            Accede a contenidos y conversaciones diseñadas para ayudarte en los
            momentos que más importan.
          </p>
        </div>
        <ChildcareExperienceCardsSection />
      </div>
    </section>
  );
};

export const ChildcareExperienceCardsSection = (): JSX.Element => (
  <div className="grid gap-4 sm:grid-cols-3">
    {childcareExperiences.map((experience) => (
      <article
        key={experience.title}
        className="rounded-3xl border border-white/20 p-5"
      >
        <span className="text-3xl text-jade" aria-hidden="true">
          {experience.icon}
        </span>
        <h3 className="mt-6 font-h3 text-xl">{experience.title}</h3>
        <p className="mt-3 font-small leading-6 text-white/70">
          {experience.text}
        </p>
      </article>
    ))}
  </div>
);

export const ChildcareExperienceOverviewSection = (): JSX.Element => (
  <div data-model-id="childcare-experience-overview">
    <ChildcareExperienceSection />
  </div>
);

export const SupportApproachCardsSection = (): JSX.Element => (
  <div className="grid gap-5 md:grid-cols-3">
    {careApproaches.map((approach) => (
      <article
        key={`support-${approach.title}`}
        className="rounded-3xl bg-light p-6"
      >
        <span className="text-3xl text-darck-blue" aria-hidden="true">
          {approach.icon}
        </span>
        <h3 className="mt-6 font-h3 text-xl text-indigo">{approach.title}</h3>
        <p className="mt-3 font-body text-textbody">{approach.text}</p>
      </article>
    ))}
  </div>
);

export const GettingStartedGuideSection = (): JSX.Element => (
  <section className="bg-light px-6 py-20 lg:px-12">
    <div className="mx-auto max-w-6xl">
      <p className="font-pretitle uppercase tracking-widest text-darck-blue">
        Así comenzamos
      </p>
      <h2 className="mt-3 font-h2 text-4xl text-indigo md:text-5xl">
        Tres pasos para sentirte acompañado
      </h2>
      <GettingStartedStepsSection />
    </div>
  </section>
);

export const GettingStartedStepsSection = (): JSX.Element => (
  <div className="mt-12 grid gap-5 md:grid-cols-3">
    {gettingStartedSteps.map((step) => (
      <article key={step.number} className="rounded-3xl bg-white p-7">
        <span className="font-h3 text-4xl text-papay">{step.number}</span>
        <h3 className="mt-7 font-h3 text-2xl text-indigo">{step.title}</h3>
        <p className="mt-3 font-body leading-6 text-textbody">{step.text}</p>
      </article>
    ))}
  </div>
);

export const GettingStartedOverviewSection = (): JSX.Element => (
  <div data-model-id="getting-started-overview">
    <GettingStartedGuideSection />
  </div>
);

export const FrequentlyAskedQuestionsAccordionSection = (): JSX.Element => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <div className="mt-10 max-w-3xl">
      {faqs.map((faq, index) => {
        const isOpen = openQuestion === index;
        return (
          <div key={faq.question} className="border-b border-indigo/15">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenQuestion(isOpen ? null : index)}
            >
              <span className="font-link text-lg text-indigo">
                {faq.question}
              </span>
              <span className="text-2xl text-darck-blue" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 pr-10 font-body leading-7 text-textbody">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const FrequentlyAskedQuestionsSection = (): JSX.Element => (
  <section id="preguntas" className="bg-white px-6 py-20 lg:px-12">
    <div className="mx-auto max-w-6xl">
      <p className="font-pretitle uppercase tracking-widest text-darck-blue">
        Preguntas frecuentes
      </p>
      <h2 className="mt-3 font-h2 text-4xl text-indigo md:text-5xl">
        Queremos que te sientas seguro
      </h2>
      <FrequentlyAskedQuestionsAccordionSection />
    </div>
  </section>
);

export const FrequentlyAskedQuestionsOverviewSection = (): JSX.Element => (
  <div data-model-id="frequently-asked-questions-overview">
    <FrequentlyAskedQuestionsSection />
  </div>
);

export const FirstMeetingBookingSection = (): JSX.Element => (
  <div id="comenzar" className="rounded-[2rem] bg-papay p-8 md:p-12">
    <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <p className="font-pretitle uppercase tracking-widest text-indigo/70">
          Tu primer encuentro
        </p>
        <h2 className="mt-3 max-w-xl font-h2 text-4xl text-indigo">
          Hablemos de lo que necesitas
        </h2>
        <p className="mt-4 max-w-xl font-body leading-7 text-indigo/80">
          Agenda una conversación inicial y descubre cómo podemos acompañarte.
        </p>
      </div>
      <a
        href="mailto:hola@namii.com"
        className="inline-flex items-center justify-center gap-3 rounded-full bg-indigo px-6 py-4 font-button text-white"
      >
        Agendar reunión <Arrow />
      </a>
    </div>
  </div>
);

export const ContactCallToActionSection = (): JSX.Element => (
  <section className="bg-light px-6 py-16 lg:px-12">
    <div className="mx-auto max-w-6xl">
      <FirstMeetingBookingSection />
    </div>
  </section>
);

export const MeetingAndFooterSection = (): JSX.Element => (
  <>
    <ContactCallToActionSection />
    <SiteFooterSection />
  </>
);

export const SiteFooterSection = (): JSX.Element => (
  <footer className="bg-light px-6 pb-8 pt-6 lg:px-12">
    <div className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-indigo/15 pt-6 text-sm text-textbody sm:flex-row sm:items-center sm:justify-between">
      <span className="font-h3 text-2xl text-indigo">namii</span>
      <p>© 2024 Namii. Crecemos juntos.</p>
      <div className="flex gap-5">
        <a href="#inicio" className="hover:text-indigo">
          Instagram
        </a>
        <a href="#inicio" className="hover:text-indigo">
          Contacto
        </a>
      </div>
    </div>
  </footer>
);

export const LandingIntroductionSection = (): JSX.Element => (
  <section className="px-6 py-16 lg:px-12">
    <div className="mx-auto max-w-6xl">
      <h2 className="font-h2 text-4xl text-indigo">Bienvenidos a Namii</h2>
      <p className="mt-4 max-w-2xl font-body leading-7 text-textbody">
        Un lugar para encontrar respuestas, apoyo y comunidad durante la
        crianza.
      </p>
    </div>
  </section>
);

export const NamiiInicioTablet = (): JSX.Element => {
  return (
    <main
      className="flex min-h-screen flex-col bg-white"
      data-model-id="509:3093"
    >
      <HeroNavigationSection />
      <CareApproachOverviewSection />
      <ChildcareExperienceOverviewSection />
      <GettingStartedOverviewSection />
      <FrequentlyAskedQuestionsOverviewSection />
      <MeetingAndFooterSection />
    </main>
  );
};
