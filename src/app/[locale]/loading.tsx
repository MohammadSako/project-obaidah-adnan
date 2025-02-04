import { RxReload } from "react-icons/rx";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center w-full">
      <div className="animate-in animate-spin flex flex-col items-center justify-center">
        <RxReload className="animate-spin text-xl" />
      </div>
    </div>
  );
}
