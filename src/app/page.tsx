import Folders from "@/layouts/Folders";
import Nav from "@/layouts/Nav";

export default function Home() {
  return (
    <div className="flex">
      <Nav />
      <Folders />
    </div>
  );
}
