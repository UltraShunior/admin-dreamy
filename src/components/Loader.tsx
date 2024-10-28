import { Spinner } from "@nextui-org/react";

type LoaderProps = {
  color:
    | "current"
    | "white"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
};

export default function Loader({ color }: LoaderProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[calc(100vh-64px)]">
        <Spinner color={color} />
      </div>
    </>
  );
}
