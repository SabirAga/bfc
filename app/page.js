import { Body } from "@/components/body";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <Body />
      </div>
      {/* <Footer /> */}
    </>
  );
}
