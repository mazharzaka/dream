import { HeroSlider } from "./HeroSlider";
import { AdrenalineWorlds } from "./AdrenalineWorlds";
import { DreamZoo } from "./DreamZoo";
import { OurHeroesSlider } from "./OurHeroesSlider";
import { MapContainer } from "../../explore";
import { TicketsSection } from "../../tickets";
import { MOCK_ATTRACTIONS } from "../data/mockAttractions";
import { MOCK_DOBY } from "../data/mockHeroes";

export function HeroPortal() {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="relative w-full h-screen overflow-hidden">
        <HeroSlider />
      </div>
      <AdrenalineWorlds title='Attractions' attractions={MOCK_ATTRACTIONS} />
      <DreamZoo />
      <OurHeroesSlider mockHeroes={MOCK_DOBY} title="Dopy" />
      <MapContainer />
      <TicketsSection />
    </div>
  );
}
