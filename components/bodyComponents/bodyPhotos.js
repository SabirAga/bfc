import bodyImg from "@/public/images/placeholders/bodyImg.jpg";
import Image from "next/image";

export const BodyPhotos = () => {
  return (
    <div className="mt-9 mb-[65px]">
      <div className="px-3">
        <div className="flex justify-between gap-[18px]">
          <div>
            <Image
              src={bodyImg}
              width={440}
              height={550}
              className="rounded-xl"
              alt="placeholder"
            />
          </div>
          <div>
            <Image
              src={bodyImg}
              width={440}
              height={550}
              className="rounded-xl"
              alt="placeholder"
            />
          </div>
          <div>
            <Image
              src={bodyImg}
              width={440}
              height={550}
              className="rounded-xl"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
