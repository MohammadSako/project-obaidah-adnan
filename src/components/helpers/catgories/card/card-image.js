import Image from "next/image";

export function CardImage({ image }) {
  return (
    <div className="aspect-h-1 aspect-w-1 md:w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 shadow-lg">
      <Image
        src={image}
        style={{
          width: "100%",
          height: "auto",
        }}
        width={200}
        height={200}
        alt={image}
      />
    </div>
  );
}
