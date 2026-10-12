import { useState } from "react";

type FrequentlyAskedQuestion = {
  question: string;
  answer?: string;
};

const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
  {
    question: "¿Qué diferencia hay entre Crece y Conecta?",
    answer:
      "Crece propone clases grupales de máximo 6 peques para explorar habilidades cognitivas, motoras, sociales y sensoriales. Conecta invita a fortalecer el vínculo entre tu bebé y tú a través del agua.",
  },
  {
    question: "¿Cómo puedo agendar la clase muestra gratis?",
  },
  {
    question: "¿Cuál experiencia es adecuada para mi peque?",
  },
  {
    question: "¿Qué necesitamos llevar a nuestro primer encuentro?",
  },
  {
    question: "¿Podemos conocer más antes de agendar?",
  },
];

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  const [openQuestion, setOpenQuestion] = useState<number>(0);

  const handleQuestionToggle = (index: number): void => {
    setOpenQuestion((currentQuestion) =>
      currentQuestion === index ? -1 : index,
    );
  };

  return (
    <section
      className="flex flex-col items-start gap-8 pt-8 pb-12 px-6 relative self-stretch w-full flex-[0_0_auto] bg-white"
      aria-labelledby="faq-title"
    >
      <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
        <h2
          id="faq-title"
          className="font-normal text-transparent relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] text-[34px] tracking-[-0.68px] leading-[39.4px]"
        >
          <span className="font-bold text-[#05263f] tracking-[-0.23px]">
            Las primeras preguntas también nos{" "}
          </span>
          <span className="[font-family:'Pacifico',Helvetica] text-[#2372ab] tracking-[-0.23px]">
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
        {frequentlyAskedQuestions.map((item, index) => {
          const isOpen = openQuestion === index;
          const answerId = `faq-answer-${index}`;

          return (
            <article
              className="flex flex-col items-start gap-4 px-0 py-6 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#05263f24]"
              key={item.question}
            >
              <h3 className="relative self-stretch w-full flex-[0_0_auto]">
                <button
                  className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] text-left"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => handleQuestionToggle(index)}
                >
                  <span className="relative flex-1 mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#05263f] text-xl tracking-[0] leading-[26.0px]">
                    {item.question}
                  </span>
                  <img
                    className="relative w-[19px] h-5"
                    src={isOpen ? "/img/contraer-1.svg" : "/img/expandir-7.svg"}
                    alt={isOpen ? "Contraer" : "Expandir"}
                  />
                </button>
              </h3>
              {isOpen && item.answer ? (
                <p
                  id={answerId}
                  className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#486071] text-lg tracking-[0] leading-[27px]"
                >
                  {item.answer}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
};
