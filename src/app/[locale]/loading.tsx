import { RxReload } from "react-icons/rx";

export default function Loading() {
  return (
    <>
      <div className="flex relative top-0 w-[100%] z-49 bg-gray-500 bg-opacity-40" />
      <div className="flex flex-col mt-96 items-center justify-center w-full absolute z-50">
        <div className="animate-in animate-spin flex flex-col items-center justify-center">
          <RxReload className="animate-spin text-6xl text-blue-600" />
        </div>
      </div>
    </>
  );
}
