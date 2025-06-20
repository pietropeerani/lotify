import Catalog from "../components/catalog";
import Header from "../components/header";
import Listened from "../components/listened";

export default function Home() {
  return (
    <>
      <Header />
      <Listened />
      <Catalog />
      {/* <StationCard
        props={{
          name: "Jazz Vibes",
          image: "https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
          followers: 204,
        }}
        square
      /> */}
    </>
  );
}