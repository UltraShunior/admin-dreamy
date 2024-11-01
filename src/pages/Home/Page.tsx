import { Layout } from "../../layout";
import { BentoGridDemo } from "./components/gridLay";

export function HomePage() {
  return (
    <Layout activeRoute="Home">
      <div className="py-10 flex flex-col justify-center items-center transition-background duration-300">
        <BentoGridDemo />
      </div>
    </Layout>
  );
}

export default HomePage;
