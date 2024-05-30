import bodyImg from "@/public/images/placeholders/bodyImg.jpg";
import Image from "next/image";

import soHot from "@/public/images/photos/soHot.png";
import crunchy from "@/public/images/photos/crunchy.png";
import menu from "@/public/images/photos/menu.png";

export const BodyPhotos = () => {
  return (
    <div className="mt-9 mb-[65px]">
      <div className="grid">
        <div className="md:flex grid mx-auto justify-between gap-[18px]">
          <Image
            src={soHot}
            width={440}
            height={550}
            className="rounded-xl w-[350px] xl:w-[450px]"
            alt="placeholder"
          />
          <Image
            src={menu}
            width={440}
            height={550}
            className="rounded-xl w-[350px] xl:w-[450px]"
            alt="placeholder"
          />
          <Image
            src={crunchy}
            width={440}
            height={550}
            className="rounded-xl w-[350px] xl:w-[450px]"
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  );
};
