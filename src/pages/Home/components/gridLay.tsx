export function BentoGridDemo() {
  return (
    <>
      <section className="w-[70%] min-h-[90vh] mx-auto mb-4 z-10 grid grid-cols-3 grid-rows-4 gap-4">
        <Skeleton className="col-span-2" />
        <Skeleton className="row-span-2" />
        <Skeleton className="col-span-1" />
        <Skeleton className="col-span-1" />
        <Skeleton className="col-span-1" />
        <Skeleton className="col-span-1" />
        <Skeleton className="col-span-1" />
        <Skeleton className="col-span-2" />
        <Skeleton className="col-span-1" />
      </section>
    </>
  );
}
const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={`w-full h-full min-h-[6rem] rounded-xl shadow-md shadow-slate-800/5 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ${className}`}
  ></div>
);
