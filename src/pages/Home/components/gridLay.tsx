export function BentoGridDemo() {
  return (
    <>
      <section className="w-[70%] h-[25vh] mx-auto mb-4 z-10 grid grid-cols-3 gap-4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </section>
      <section className="w-[70%] h-[29vh] mx-auto mb-4 z-10 grid grid-cols-3 gap-4">
        <Skeleton className="col-span-2" />
        <Skeleton />
      </section>
      <section className="w-[70%] h-[25vh] mx-auto mb-4 z-10 grid grid-cols-3 gap-4">
        <Skeleton />
        <Skeleton className="col-span-2" />
      </section>
    </>
  );
}
const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={`w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ${className}`}
  ></div>
);
