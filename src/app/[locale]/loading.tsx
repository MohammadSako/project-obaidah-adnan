import Spinner from "@/components/UI/spinner";

export default function Loading() {
  return (
    <>
      <div className="flex fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50" />
      <div className="flex fixed top-0 left-0 w-full h-full justify-center items-center z-50">
        <Spinner />
      </div>
    </>
  );
}
