import Button2 from "@/ui/components/Button2";
import Arrow1 from "@/ui/emoji/Arrow1";
import Calender from "@/ui/emoji/Calender";
import Coding from "@/ui/emoji/coding";
import Pen from "@/ui/emoji/Pen";
import RunningMan from "@/ui/emoji/RunningMan";
import StarOctogram from "@/ui/emoji/StarOctogram";
import Target from "@/ui/emoji/target";
import React from "react";

export default function Features() {
  return (
    <div className="bg-[#F9F6F2] py-14 lg:py-[150px]  text-black  ">
      <div className="md:max-w-[1000px] px-5 md:m-auto space-y-10 lg:space-y-20 ">
        {/* first */}
        <section className="w-full flex flex-wrap justify-between">
          <section className="w-full sm:w-3/4 mx-auto lg:w-1/2   bg-white rounded-3xl p-5 md:p-10 border-2 border-black flex flex-col gap-10 relative">
            <Pen />
            <article>
              <h3 className="font-semibold  text-xl md:text-3xl mb-2">
                Web design
              </h3>
              <p className="text-base md:text-xl text-[#404040]">
                Web design is a process of making a website for the users
              </p>
            </article>
            <article>
              <h3 className="font-semibold text-xl md:text-2xl  mb-2">
                <Target />
                Goals
              </h3>
              <p className="text-base md:text-xl  text-[#404040]">
                The goal is to make the website easy to use for the user and
                drive the necessary growth.
              </p>
            </article>
            <article>
              <h3 className="font-semibold text-xl md:text-2xl  mb-2">
                <RunningMan />
                What to do?
              </h3>
              <p className="flex text-base md:text-xl text-[#404040]">
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
          <section className=" mt-16 mx-auto lg:ml-auto lg:my-auto">
            <div className="mb-8 ">
              <h1 className="text-5xl sm:text-[64px]  text-notesOrange ">
                Write Notes
              </h1>
              <p className="text-xl sm:text-2xl mt-4">
                Write any note you want
              </p>
            </div>
            <Button2 variant="secondary">Try Now</Button2>
          </section>
        </section>

        {/* second */}
        <section className="relative  flex flex-wrap">
          <Arrow1 />
          <section className="mx-auto mb-16 lg:mx-auto lg:mr-auto lg:my-auto">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-[64px]  text-notesOrange ">
                Plan your day
              </h1>
              <p className="text-xl sm:text-2xl mt-4">
                Make sure your day is well planned
              </p>
            </div>
            <Button2 variant="secondary">Try Now</Button2>
          </section>

          <div className="w-full sm:w-3/4 mx-auto  lg:w-1/2 relative flex flex-col space-y-6">
            <Calender />
            <div className="bg-white w-full p-10 rounded-3xl flex justify-between border-2 border-black">
              <div>
                <h2 className="text-3xl font-semibold">Monday</h2>
                <p className="text-[#808080] text-xl">May third</p>
              </div>
              <StarOctogram />
            </div>
            <div className="flex space-x-5 w-full">
              <ul className="w-full   rounded-3xl bg-white p-10 border-2 border-black  space-y-5">
                {todo.map((todo, i) => (
                  <li key={i} className=" flex items-center space-x-3 ">
                    <div className="w-5 h-5 rounded-full border-2 border-[#F7BEF1]"></div>
                    <span className="text-xl">{todo}</span>
                  </li>
                ))}
              </ul>
              <ul className="hidden md:block md:w-full rounded-3xl bg-white p-10 border-2 border-black space-y-5">
                {todo.map((todo, i) => (
                  <li key={i} className=" flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#F7BEF1]"></div>
                    <span className="text-xl">{todo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center mt-14 flex flex-col items-center ">
          <Coding />
          <p className="text-[50px] max-w-[726px] my-10 leading-[60px] text-black">
            Ready to take your
            <span className="text-notesOrange"> notes</span> to the next level?
          </p>
          <Button2 variant="secondary">Try Now</Button2>
        </section>
      </div>
    </div>
  );
}

const todo = [
  "Do laundry",
  "Morning run",
  "Call mom",
  "go to work",
  "Daily meeting",
  "Buy dinner",
];
