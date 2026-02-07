"use client";
import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../../lib/utils";
import emailjs from "emailjs-com";
import { toast } from "sonner"; // ✅ import sonner toast

export function SignupFormDemo() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(
        "service_6wivabh",
        "template_fqv1psr",
        formRef.current,
        "QWQqwbA_h3AaMg6C8"
      ),
      {
        loading: "Sending...",
        success: () => {
          formRef.current.reset();
          return "✅ Form submitted successfully!";
        },
        error: "❌ Failed to send. Please try again.",
      }
    );
  };
  const LabelInputContainer = ({ children, className }) => {
    return (
      <div className={cn("flex w-full flex-col space-y-2", className)}>
        {children}
      </div>
    );
  };
  const BottomGradient = () => (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl bg-white/10 backdrop-blur md:p-8 dark:bg-white/5 dark:backdrop-blur">
      <form className="my-0" ref={formRef} onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="firstname">Name</Label>
          <Input
            id="firstname"
            name="name"
            placeholder="Enter your full name"
            type="text"
            required
          />
        </LabelInputContainer>
        <div className="mb-4 mt-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="you@example.com"
              type="email"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="e.g., +966 5XXXXXXX / +91 98XXXXXXX"
              type="tel"
              required
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            name="subject"
            type="text"
            placeholder="	Tell us how we can help you"
            className="h-30 align-top pt-4 text-start placeholder:text-left placeholder:align-top"
            required
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}
