import { Layout } from "../../layout";
import { BentoGridDemo } from "./components/gridLay";

export default function HomePage() {
  return (
    <Layout activeRoute="Home">
      <div className="py-10 flex flex-col justify-center items-center bg-[#f2f2f2] dark:bg-black transition-background duration-300">
        <BentoGridDemo />
      </div>
    </Layout>
  );
}
