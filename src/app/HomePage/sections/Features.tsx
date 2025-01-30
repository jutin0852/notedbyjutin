import Button2 from "@/ui/components/Button2";
import Pen from "@/ui/emoji/Pen";
import RunningMan from "@/ui/emoji/RunningMan";
import StarOctogram from "@/ui/emoji/StarOctogram";
import Target from "@/ui/emoji/target";
import React from "react";

export default function Features() {
  return (
    <div className="bg-[#F9F6F2]  py-[150px]  text-black  ">
      <div className="w-[1000px] m-auto">
        <section className="flex justify-between">
          <section className=" bg-white rounded-3xl p-10 border-2 border-black flex flex-col gap-10 w-[500px] relative">
            <Pen />
            <article>
              <h3 className="font-semibold text-[28px] mb-2">Web design</h3>
              <p className="text-xl text-[#404040]">
                Web design is a process of making a website for the users
              </p>
            </article>
            <article>
              <h3 className="font-semibold text-2xl mb-2">
                <Target />
                Goals
              </h3>
              <p className="text-xl text-[#404040]">
                The goal is to make the website easy to use for the user and
                drive the necessary growth.
              </p>
            </article>
            <article>
              <h3 className="font-semibold text-[24px] mb-2">
                <RunningMan />
                What to do?
              </h3>
              <p className="flex text-xl text-[#404040]">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="size-4 mr-2 self-center"
                />
                Conduct research
              </p>
              <p className="flex text-xl text-[#404040]">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="size-4 mr-2 self-center"
                />
                Develop wire frames
              </p>
            </article>
          </section>
          <section className="my-auto">
            <div className="mb-8">
              <h1 className="text-[64px] text-notesOrange ">Write Notes</h1>
              <p className="text-2xl">Write any note you want</p>
            </div>
            <Button2 variant="secondary">Try Now</Button2>
          </section>
        </section>

        <section className="my-[160px] flex justify-between">
          <section className="my-auto">
            <div className="mb-8">
              <h1 className="text-[64px] text-notesOrange ">Plan your day</h1>
              <p className="text-2xl">Make sure your day is well planned</p>
            </div>
            <Button2 variant="secondary">Try Now</Button2>
          </section>
          <section>
            <div className="w-[512px] gap-6">
              <div className="bg-white p-10 rounded-3xl flex justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">Monday</h2>
                  <p className="text-[#808080] text-xl">May third</p>
                </div>
                <StarOctogram />
              </div>
              <div className="flex">
                <div className="rounded-3xl">
                </div>
                <div></div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
