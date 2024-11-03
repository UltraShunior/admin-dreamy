import { Button } from "@nextui-org/react";


export function BentoGridDemo() {
  return (
    <>
      <article className="min-h-[70vh] mx-auto mb-4 z-10 grid grid-cols-3 grid-rows-3  gap-4">
        <section className="grid grid-cols-3 col-span-2 p-[5%] rounded-xl bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-red-600 from-0% via-orange-400 via-41% to-black to-100%">
          <div className="col-span-2">
            <h4 className="text-white text-2xl font-bold">
              Your target is incomplete
            </h4>
            <p className="text-white text-sm mt-2">
              You have completed 48% of the given target, you can also check your
              status.
            </p>
            <Button className="mt-4 bg-black/30 text-white">Check status</Button>
          </div>  
          <div className="col-span-1 flex items-center justify-center">
            <p className="text-white text-2xl font-bold">48%</p>{/*TODO: Add a progress graph*/}
          </div>
        </section>
        <Skeleton className="row-span-2 dark:bg-neutral-800" />
        <Skeleton className="col-span-1 dark:bg-neutral-800" />
        <Skeleton className="col-span-1 dark:bg-neutral-800" />
        <Skeleton className="col-span-1 dark:bg-neutral-800" />
        <Skeleton className="col-span-2 dark:bg-neutral-800" />
      </article>
    </>
  );
}
const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={`${className} w-full h-full min-h-[6rem] rounded-xl shadow-md shadow-slate-800/5 bg-gradient-to-br from-neutral-200 dark:from-neutral-800`}
  ></div>
);
