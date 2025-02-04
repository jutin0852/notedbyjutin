import Button2 from "@/ui/components/Button2";
import Heroimage from "@/ui/images/heroimage";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="p-5  bg-[#F8EEE2] lg:px-[120px] lg:py-[100px] flex  flex-wrap justify-between text-black">
      <section className="w-full sm:w-3/4 mx-auto lg:mx-0 lg:w-1/2">
        <div className=" flex flex-col gap-6">
          <p className="text-5xl leading-normal md:text-[65px] lg:text-[80px] lg:leading-[90px] text-black">
            <span className="text-notesOrange">Note</span> Taking,
            <br /> Made Simple
          </p>
          <p>
            Passionately made by student and for student. <br /> Noted, the all
            in one note taking app.
          </p>
        </div>
        <Button2 className="mt-6 lg:mt-12 text-white" variant="secondary">
          <Link href="/note"> Try For Free</Link>
        </Button2>
      </section>
      <section className="relative lg:bottom-16 lg:w-1/2 mx-auto">
        <Heroimage />
      </section>
    </div>
  );
}
