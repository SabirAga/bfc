import bodyImg from "@/public/images/placeholders/bodyImg.jpg";
import Image from "next/image";

import soHot from "@/public/images/photos/soHot.jpeg";
import menu from "@/public/images/photos/menu.jpeg";
import crunchy from "@/public/images/photos/crunchy.jpeg";

export const BodyPhotos = () => {
  return (
    <div className="mt-9 mb-[65px]">
      <div className="">
        <div className="flex justify-between gap-[18px]">
          <div>
            <Image
              // src={bodyImg}
              src={soHot}
              width={440}
              height={550}
              className="rounded-xl"
              alt="placeholder"
            />
          </div>
          <div>
            <Image
              // src={bodyImg}
              src={menu}
              width={440}
              height={550}
              className="rounded-xl"
              alt="placeholder"
            />
          </div>
          <div>
            <Image
              // src={bodyImg}
              src={crunchy}
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
