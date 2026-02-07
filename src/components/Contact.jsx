import { LocateFixed, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { SignupFormDemo } from "./ui/Form";

const Contact = () => {
  return (
    <section
      className="w-screen overflow-hidden h-full custom-padding  mb-10"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.2), transparent 70%)",
      }}
      id="contact"
    >
      <div className="grid md:grid-cols-2 gap-20 md:gap-4">
        <div className="w-full h-auto">
          <div className="flex flex-col">
            <h1 className="text-4xl mb-3  bg-gradient-to-r from-white via-purple-800 to-purple-900 bg-clip-text text-transparent">
              How can we help?
            </h1>
            <h2 className="text-4xl bg-gradient-to-r from-white via-purple-800 to-purple-900 bg-clip-text text-transparent">
              Let us know
            </h2>

            <p className="text-sm text-gray-400 mt-8">
              Tell us about your goals, challenges, or big ideas — and we’ll
              help turn them into real, measurable outcomes. Whether you’re
              launching a new brand, redesigning your digital presence, or
              building a custom solution from scratch, our team works closely
              with you from strategy to execution to bring your vision to life.
            </p>
            <div className="flex flex-row items-center gap-4 mt-5">
              <Mail width={15} height={15} />
              <p className="text-sm">info@quardlink.com</p>
            </div>
            <div className="flex flex-row items-center gap-4 mt-5">
              <Phone width={15} height={15} />
              <p className="text-sm">+966 0532069055</p>
              <Phone width={15} height={15} />
              <p className="text-sm">+91 7994296967</p>
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row items-center gap-4 mt-5">
                <MapPin width={15} height={15} />
                <p className="text-sm">Al Khobar, Saudi Arabia</p>
              </div>
              <div className="flex flex-row items-center gap-4 mt-5">
                <MapPin width={15} height={15} />
                <p className="text-sm">Kozhikode, Kerala, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <SignupFormDemo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
