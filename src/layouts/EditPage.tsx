import Icon from "@/components/Icon";
import { notes } from "@/data/data";
// import cn from "@/utility/cn";
import React from "react";

interface EditPageProps {
  // activeLayout: number;
  // setActiveLayout: React.Dispatch<React.SetStateAction<number>>;
  params: string;
}
export default function EditPage({
  // activeLayout,
  // setActiveLayout,
  params,
}: EditPageProps) {
  const note = notes.find((note) => note.id === params);
  return (
    <>
      {/* <p onClick={() => setActiveLayout(2)}>back</p> */}
      <header className="flex justify-between my-5">
        <h2 className="font-bold text-[32px] tracking-wider">{note?.title}</h2>
        <Icon src="/icons/threedots.png" className="self-start w-9" />
      </header>

      {/* Details and options section */}
      <section className="text-sm">
        <div className="pb-3  flex justify-between text-sm">
          <div className=" flex">
            <Icon src="/icons/calender.png" className="mr-3 " />
            <p className="text-opacity-10 ">Date</p>
          </div>
          <p className="text-opacity-10">21/06/2024</p>
        </div>

        {/* divider */}
        <div className="border-b border-white border-opacity-10"></div>

        <div className="py-3  flex justify-between text-sm">
          <div className=" flex">
            <Icon src="/folder.png" className="mr-3 opacity-50" />
            <p className="text-opacity-10 ">folder</p>
          </div>
          <p className="text-opacity-10">Personal</p>
        </div>

        <div className="flex gap-3 py-3 border-y border-white border-opacity-10 ">
          <p>paragraph</p>
          <p>
            16 <Icon src="/icons/down.png" />
          </p>
          <p>
            <Icon src="/icons/bold.png" />
            <Icon src="/icons/italics.png" />
            <Icon src="/icons/underline.png" />
          </p>
          <p>
            <Icon src="/icons/image.png" className="mr-2" />
            <Icon src="/icons/link.png" />
          </p>
          <p>
            <Icon src="/icons/table.png" />
          </p>
        </div>
      </section>

      <article className="pt-5">
        fmttkvtvktbWhat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Why do we use it? It is a long established fact
        that a reader will be distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to usnt here, co
        making it look like readable English. Many desktop publishing packages
        and web page editors will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like). Where does it come
        from? Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero,
        written in 45 BC. This book is a treatise on the theory of ethics, very
        popular during the Renaissance. The first line of Lorem Ipsum,Lorem
        ipsum dolor sit amet. comes from a line in section 1.10.32. The standard
        chunk of Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from e Finibus Bonorum by
        Cicero are also reproduced in their exact original form, accompanied by
        English versions from the 1914 translation by H. Rackham. Where can I
        get some? There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered alteration in some form, by
        injected humour, or randomised words which look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need
        to be sure there anything embarrassing hidden in the middle of text. All
        the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet. It uses a dictionary of over 200 Latin words, combined with a
        handful of model sentence structures, to generate Lorem Ipsum which
        looks reasonable. The generated Lorem Ipsum is therefore always free
        from repetition, injected humour, or non-characteristic words etc. 5
        paragraphs words bytes lists Start witorem ipsum dolor sit amet
      </article>
    </>
  );
}
