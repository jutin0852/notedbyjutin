import Button2 from "@/ui/components/Button2";
import Heroimage from "@/ui/images/heroimage";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-[#F8EEE2] px-[120px] py-[100px] flex justify-between text-black">
      <section>
        <div className=" flex flex-col gap-6">
          <p className="text-[80px] leading-[90px] text-black">
            <span className="text-notesOrange">Note</span> Taking,
            <br /> Made Simple
          </p>
          <p >
            Passionately made by student and for student. <br /> Noted, the all
            in one note taking app.
          </p>
        </div>
        <Button2 className="mt-12 text-white" variant="secondary">
          <Link href='/note'> Try For Free</Link>
        </Button2>
      </section>
      <section className="relative bottom-16">
        <Heroimage />
      </section>
    </div>
  );
}
