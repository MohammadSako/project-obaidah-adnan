"use client";
import { deleteCarouselImage, deleteCarouselById } from "@/lib/db/products";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const ImagesList = ({ data }) => {
  async function carouselDeleteHandler(id, imageid) {
    try {
      await deleteCarouselImage(imageid);
      await deleteCarouselById(id);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <div className="mt-20">
      <h2 className="text-2xl text-gray-700 my-4">Carousel Images</h2>
      <div className="border-2 border-gray-200 rounded-lg p-4">
        <div className="h-auto">
          {data.map((image) => (
            <div key={image.id}>
              <div
                key={image.id}
                className="flex flex-row justify-between items-center"
              >
                <div className="w-96">
                  <Image
                    alt={image.image}
                    src={image.image}
                    width={200}
                    height={30}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="">
                  <MdDelete
                    size={50}
                    className="cursor-pointer hover:*:text-red-600"
                    onClick={() =>
                      carouselDeleteHandler(image.id, image.imageid)
                    }
                  />
                </div>
              </div>
              <div className="border-t my-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesList;
