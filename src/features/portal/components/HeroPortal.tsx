import { HeroSlider } from "./HeroSlider";
import { AdrenalineWorlds } from "./AdrenalineWorlds";
import { DreamZoo } from "./DreamZoo";
import { OurHeroesSlider } from "./OurHeroesSlider";
import { MapContainer } from "../../explore";
import { TicketsSection } from "../../tickets";
import { MOCK_ATTRACTIONS, MOCK_TICKETSETS } from "../data/mockAttractions";
import { MOCK_DOBY } from "../data/mockHeroes";
<<<<<<< HEAD
import { Ticketsets } from "./Ticketsets";
=======
import Merch from "./Merch";

>>>>>>> e872449acc639af97de1aabda79fe0cba44a5f97

export function HeroPortal() {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="relative w-full h-screen overflow-hidden">
        <HeroSlider />
      </div>
      <AdrenalineWorlds title="Attractions" attractions={MOCK_ATTRACTIONS} />
      <DreamZoo />
      <OurHeroesSlider mockHeroes={MOCK_DOBY} title="Dopy" />
      <Merch />
      <MapContainer />
      <Ticketsets title="Ticketsets" attractions={MOCK_TICKETSETS} />
      <TicketsSection />
    </div>
  );
}
