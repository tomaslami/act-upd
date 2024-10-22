import Courses from "@/components/Courses";
import FrontPage from "@/components/FrontPage";
import Quote from "@/components/Quote";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <FrontPage />
      <Services />
      <Courses />
      <Quote />
    </>
  );
}
