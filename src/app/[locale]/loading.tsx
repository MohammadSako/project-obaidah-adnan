import { RxReload } from "react-icons/rx";

export default function Loading() {
  return (
    <>
      <div className="flex fixed top-0 w-[100%] h-[100vh] z-10 bg-gray-500 bg-opacity-40" />
      <div className="flex flex-col mt-96 items-center justify-center w-full absolute z-50">
        <div className="animate-in animate-spin flex flex-col items-center justify-center">
          <RxReload className="animate-spin text-6xl text-white" />
        </div>
      </div>
    </>
  );
}
