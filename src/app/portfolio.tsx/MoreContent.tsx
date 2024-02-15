import Branding from "./Branding";
import Links from "./Links";

export default function MoreContent() {
  return (
    <div className="px-32 pt-16 pb-48 bg-black space-y-28">
      <Branding />
      <Links />

      <div className="flex flex-col justify-center items-center gap-2 text-4xl">
        <p>You got a great idea or a project?</p>
        <p className="text-[#F80000]">Hit me up, let&apos;s talk about it.</p>
      </div>
    </div>
  );
}
