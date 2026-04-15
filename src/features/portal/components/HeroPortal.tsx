import { HeroSlider } from "./HeroSlider";
import { Header } from "@/src/components/layout/Header";

export function HeroPortal() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Header />
      <HeroSlider />
    </div>
  );
}
