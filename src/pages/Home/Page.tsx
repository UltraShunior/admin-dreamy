import Header from "../../components/Header";
import ReflexBox from "../../components/ReflexBox";
import ReflexBox2 from "../../components/ReflexBox2";
export default function HomePage() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center h-[calc(100vh)] bg-[#f2f2f2] dark:bg-black transition-all duration-300">
        <span className="text-4xl font-bold">Home</span>
        <ReflexBox />
        <ReflexBox2 />
      </div>
    </>
  );
}
