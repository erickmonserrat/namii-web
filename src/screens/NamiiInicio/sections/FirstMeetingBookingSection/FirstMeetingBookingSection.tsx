export const FirstMeetingBookingSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="first-meeting-booking-title"
      className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#ffd0b7]"
    >
      <img
        className="relative w-[1440px] h-[60px]"
        alt="Onda"
        src="/img/onda-5.svg"
      />
      <div className="flex flex-col items-center gap-[22px] pt-8 pb-[88px] px-[300px] relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="absolute top-[-52px] left-[23px] w-[237px] h-[369px]"
          alt=""
          aria-hidden="true"
          src="/img/vector-9.svg"
        />
        <img
          className="absolute top-[-134px] left-[1037px] w-[423px] h-[332px]"
          alt=""
          aria-hidden="true"
          src="/img/vector-10.svg"
        />
        <p
          id="first-meeting-booking-title"
          className="font-bold text-[#05263f] text-5xl text-center tracking-[-0.96px] leading-[55.7px] relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica]"
        >
          Hagamos espacio para
          <br />
          crecer y conectar.
        </p>
        <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-[#05263f] text-xl text-center tracking-[0] leading-[30px]">
          Conoce namii con tu peque. Agenda tu clase muestra gratis en Crece o
          conversemos sobre la experiencia Conecta.
        </p>
        <button
          type="button"
          aria-label="Agenda tu clase"
          className="inline-flex flex-col items-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-playing-yellow rounded-[100px] overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <span className="h-6 inline-flex items-center gap-2 relative">
            <span className="relative flex items-center w-fit mt-[-0.50px] [font-family:'Nunito_Sans',Helvetica] font-extrabold text-indigo text-[17px] tracking-[0] leading-[normal]">
              Agenda tu clase
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};
