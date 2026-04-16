import { HeroSlider } from "./HeroSlider";
import { Header } from "@/src/components/layout/Header";
import { AdrenalineWorlds } from "./AdrenalineWorlds";

export function HeroPortal() {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="relative w-full h-screen overflow-hidden">
        <Header />
        <HeroSlider />
      </div>
      <AdrenalineWorlds />
    </div>
  );
}
