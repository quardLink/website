import { GlowingEffectDemo } from "./ui/Grid";

const Service = () => {
  return (
    <section
      className="w-screen overflow-hidden h-full common-padding "
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(147, 51, 234, 0.4), transparent 50%)",
      }}
      id="service"
    >
      <div className="flex flex-1 flex-col">
        <div>
          <h1 className="text-2xl text-center md:text-4xl text-bold">
            Transform Your Business with Creative Solutions
          </h1>
          <div className="mt-15 md:mt-24">
            <GlowingEffectDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
