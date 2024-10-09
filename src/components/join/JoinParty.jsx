import JoinPartyVideo from "./JoinPartyVideo";

const JoinParty = () => {
  return (
    <section className=" relative overflow-hidden">
      <div className="main-container py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-28 flex flex-col gap-8 md:gap-10 lg:gap-12 z-10 relative">
        {/* bottom video */}
        <JoinPartyVideo />
      </div>
    </section>
  );
};

export default JoinParty;
