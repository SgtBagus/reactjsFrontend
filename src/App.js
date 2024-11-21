import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CardComponents from "./components/CardComponents";

import "./components/customStyle.css";

const App = () => {
  const [houseList, setHouseList] = useState([
    {
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Ngemplak, Yogyakarta",
      titleHouse: "Base 1",
      bedRoomCount: "3 Bedrooms",
      prelaunchStatus: "Available",
      desc: "Hunian nyaman dengan desain modern di lokasi strategis.",
    },
    {
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      location: "Sleman, Yogyakarta",
      titleHouse: "Base 2",
      bedRoomCount: "2 Bedrooms",
      prelaunchStatus: "Coming Soon",
      desc: "Rumah minimalis dengan pemandangan indah pegunungan.",
    },
    {
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Ubud, Bali",
      titleHouse: "Base 3",
      bedRoomCount: "4 Bedrooms",
      prelaunchStatus: "Sold Out",
      desc: "Hunian luas yang cocok untuk keluarga besar.",
    },
    {
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Canggu, Bali",
      titleHouse: "Base 4",
      bedRoomCount: "2 Bedrooms",
      prelaunchStatus: "Available",
      desc: "Rumah dengan suasana asri dekat dengan pusat kota.",
    },
    {
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "Bandung, Jawa Barat",
      titleHouse: "Base 5",
      bedRoomCount: "3 Bedrooms",
      prelaunchStatus: "Coming Soon",
      desc: "Hunian eksklusif di area wisata populer.",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Hero />

      <div className="mx-3">
        <div class="row align-items-center my-2">
          <div class="col-6">
            <h2 className="display-4 fw-light m-2">Upgrade Your Model.</h2>
          </div>
          <div class="col-6">
            <p className="m-2">
              Enhance your model with pre-designed add-ons like the Base Deck
              and the Base Deck+. Additional items are also available through
              key partnerships.
            </p>
          </div>
        </div>
        {/* <div class="p-3"> */}
        <div class="row flex-nowrap overflow-auto">
          {houseList.map(
            (
              {
                image,
                location,
                titleHouse,
                bedRoomCount,
                prelaunchStatus,
                desc,
              },
              idx
            ) => (
              <div class="col-4 my-2">
                <CardComponents
                  key={idx}
                  image={image}
                  location={location}
                  titleHouse={titleHouse}
                  bedRoomCount={bedRoomCount}
                  prelaunchStatus={prelaunchStatus}
                  desc={desc}
                />
              </div>
            )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
