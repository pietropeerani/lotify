import { useState } from "react";
import Catalog from "../lib/components/catalog";
import FavoriteStationBar from "../lib/components/favorite-station-bar";
import Header from "../lib/components/header";
import Listened from "../lib/components/listened";
import stations from "../lib/data/stations";
import StationCard from "../lib/components/station-card";
import AudioOnlyYouTubePlayer from "../lib/components/player";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string>(stations[0].source);

  console.log(videoUrl);
  return (
    <>
      <Header />
      <div className="flex gap-2">
        <div className="w-14">
          <FavoriteStationBar />
        </div>
        <div className="flex-1">
          <Listened />
          <Catalog />
        </div>
      </div>
      <StationCard
        props={{
          name: "Jazz Vibes",
          image:
            "https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
          author: "John Doe",
          source: "",
        }}
        square
        onClick={() =>
          setVideoUrl("https://www.youtube.com/watch?v=jfKfPfyJRdk")
        }
      />
      <AudioOnlyYouTubePlayer externalUrl={videoUrl} />
    </>
  );
}
