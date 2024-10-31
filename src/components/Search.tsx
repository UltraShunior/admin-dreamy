import { Searcher } from "../assets/searcher";

export function Search() {
  // TODO: Add search modal & functionality
  return (
    <search className="w-full flex justify-center">
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search page..."
          className="w-[20rem] h-10 m-2 rounded-xl border border-[#f8f7fa] bg-[#f2f2f2] px-3 py-1 transition-background duration-300 focus:outline-none focus:border-[#8176f2] focus:shadow-xl focus:shadow-[#8176f2]/20 dark:border-[#24283a] dark:bg-[#0d0d0d] dark:focus:border-green-400/70 dark:focus:shadow-xl dark:focus:shadow-[#4ade8033]  max-md:w-[10rem]"
        />
        <button type="submit" className="max-lg:hidden h-10 w-10 ">
          <Searcher />
        </button>
      </form>
    </search>
  );
}
