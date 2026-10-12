import { useState } from "react";

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
};

const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
  {
    question: "¿Qué diferencia hay entre Crece y Conecta?",
    answer:
      "Crece propone clases grupales de máximo 6 peques para explorar habilidades cognitivas, motoras, sociales y sensoriales. Conecta invita a fortalecer el vínculo entre tu bebé y tú a través del agua.",
  },
  {
    question: "¿Cómo puedo agendar la clase muestra gratis?",
    answer:
      "Puedes agendar tu clase muestra gratis contactándonos directamente. Te ayudaremos a encontrar el horario y la experiencia ideal para tu peque.",
  },
  {
    question: "¿Cuál experiencia es adecuada para mi peque?",
    answer:
      "La experiencia adecuada depende de la edad, las necesidades y los intereses de tu peque. Podemos orientarte para elegir entre nuestras opciones Crece y Conecta.",
  },
  {
    question: "¿Qué necesitamos llevar a nuestro primer encuentro?",
    answer:
      "Para el primer encuentro necesitarán traje de baño, toalla, pañal acuático si lo requiere tu peque y muchas ganas de disfrutar la experiencia.",
  },
  {
    question: "¿Podemos conocer más antes de agendar?",
    answer:
      "Claro. Estamos disponibles para resolver todas tus dudas y compartirte más información antes de que agendes tu experiencia.",
  },
];

export const FrequentlyAskedQuestionsOverviewSection = (): JSX.Element => {
  const [openQuestion, setOpenQuestion] = useState<number>(0);

  const toggleQuestion = (index: number): void => {
    setOpenQuestion((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <section className="flex flex-col items-start gap-8 pt-12 pb-16 px-10 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="font-normal text-transparent text-[40px] tracking-[-0.80px] leading-[46.4px] relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica]">
          <span className="font-bold text-[#05263f] tracking-[-0.32px]">
            Las primeras preguntas también nos{" "}
          </span>
          <span className="[font-family:'Pacifico',Helvetica] text-[#2372ab] tracking-[-0.32px]">
            acercan.
          </span>
        </h2>
        <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-lg tracking-[0] leading-[27px]">
          Encuentra respuestas a las dudas más frecuentes sobre nuestras
          experiencias, sesiones y cómo agendar.
        </p>
        <a
          className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-extrabold text-darck-blue text-lg tracking-[0] leading-[normal]"
          href="#contacto"
        >
          Conversemos →
        </a>
      </div>
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        {frequentlyAskedQuestions.map((faq, index) => {
          const isOpen = openQuestion === index;
          const answerId = `frequently-asked-question-answer-${index}`;

          return (
            <div
              className="flex flex-col items-start gap-4 px-0 py-6 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#05263f24]"
              key={faq.question}
            >
              <button
                aria-controls={answerId}
                aria-expanded={isOpen}
                className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] text-left"
                onClick={() => toggleQuestion(index)}
                type="button"
              >
                <span className="relative flex-1 mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[22px] tracking-[0] leading-[28.6px]">
                  {faq.question}
                </span>
                <img
                  className={`relative w-[19px] ${isOpen ? "h-0.5" : "h-5"}`}
                  alt={isOpen ? "Contraer" : "Expandir"}
                  src={isOpen ? "/img/contraer-1.svg" : "/img/expandir-7.svg"}
                />
              </button>
              {isOpen && (
                <p
                  className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-lg tracking-[0] leading-[27px]"
                  id={answerId}
                >
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
