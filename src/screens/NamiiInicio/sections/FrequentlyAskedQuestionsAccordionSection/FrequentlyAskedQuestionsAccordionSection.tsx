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
      "Puedes agendar tu clase muestra gratis escribiéndonos a través de nuestro canal de contacto. Te ayudaremos a elegir el horario y la experiencia que mejor se adapte a tu familia.",
  },
  {
    question: "¿Cuál experiencia es adecuada para mi peque?",
    answer:
      "Nuestro equipo puede orientarte según la edad, etapa de desarrollo y necesidades de tu peque para encontrar la experiencia más adecuada.",
  },
  {
    question: "¿Qué necesitamos llevar a nuestro primer encuentro?",
    answer:
      "Te recomendamos llevar el traje de baño de tu peque, una toalla, pañal acuático si lo necesita y todo aquello que le ayude a sentirse cómodo durante el encuentro.",
  },
  {
    question: "¿Podemos conocer más antes de agendar?",
    answer:
      "Claro que sí. Estamos disponibles para resolver tus dudas y compartirte toda la información que necesites antes de reservar tu experiencia.",
  },
];

export const FrequentlyAskedQuestionsAccordionSection = (): JSX.Element => {
  const [openQuestion, setOpenQuestion] = useState<number>(0);

  const handleQuestionToggle = (questionIndex: number): void => {
    setOpenQuestion((currentQuestion) =>
      currentQuestion === questionIndex ? -1 : questionIndex,
    );
  };

  return (
    <section className="flex items-start gap-20 p-[88px] relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff]">
      <div className="flex flex-col w-[380px] items-start gap-[18px] relative">
        <h2 className="font-normal text-transparent text-[44px] tracking-[-0.88px] leading-[51.0px] relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica]">
          <span className="font-bold text-[#05263f] tracking-[-0.39px]">
            Las primeras
            <br />
            preguntas también
            <br />
            nos{" "}
          </span>
          <span className="[font-family:'Pacifico',Helvetica] text-[#2372ab] tracking-[-0.39px]">
            acercan.
          </span>
        </h2>
        <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-lg tracking-[0] leading-[27px]">
          Encuentra respuestas a las dudas más frecuentes sobre nuestras
          experiencias, sesiones y cómo agendar.
        </p>
        <a
          className="relative w-fit [font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#2372ab] text-lg tracking-[0] leading-[normal]"
          href="#contacto"
        >
          Conversemos →
        </a>
      </div>
      <div className="flex flex-col items-start relative flex-1 grow">
        {frequentlyAskedQuestions.map((item, index) => {
          const isOpen = openQuestion === index;
          const answerId = `frequently-asked-question-answer-${index}`;

          return (
            <div
              className="flex flex-col items-start gap-4 px-0 py-6 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#05263f24]"
              key={item.question}
            >
              <button
                aria-controls={answerId}
                aria-expanded={isOpen}
                className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto] text-left"
                onClick={() => handleQuestionToggle(index)}
                type="button"
              >
                <span className="relative flex-1 mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-[22px] tracking-[0] leading-[normal]">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="relative w-[22px] h-[22px] shrink-0"
                >
                  <img
                    className={
                      isOpen
                        ? "absolute w-[79.17%] h-[50.00%] top-[50.00%] left-[20.83%]"
                        : "absolute w-[79.17%] h-[79.17%] top-[20.83%] left-[20.83%]"
                    }
                    alt=""
                    src={isOpen ? "/img/vector-4.svg" : "/img/vector-8.svg"}
                  />
                </span>
              </button>
              {isOpen && (
                <p
                  className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-lg tracking-[0] leading-[27px]"
                  id={answerId}
                >
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
