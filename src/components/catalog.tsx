import type { StationProps } from "./station-card"
import StationCard from "./station-card"

const catalog: StationProps[] = [
    {
        name: "Jazz Vibes",
        image: "https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA==",
        followers: 204,
    },
    {
        name: "Jazz Vibes",
        image: "https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA==",
        followers: 204,
    },
    {
        name: "Jazz Vibes",
        image: "https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA==",
        followers: 204,
    },
    {
        name: "Jazz Vibes",
        image: "https://media.istockphoto.com/id/500601834/photo/lake-moraine-and-canoe-dock-in-banff-national-park.jpg?s=612x612&w=0&k=20&c=TRuwRNk0hMinV-XA0pyvaZHKIhHEtdpGqzmcGy-VAlo=",
        followers: 204,
    },
    {
        name: "Jazz Vibes",
        image: "https://media.istockphoto.com/id/500601834/photo/lake-moraine-and-canoe-dock-in-banff-national-park.jpg?s=612x612&w=0&k=20&c=TRuwRNk0hMinV-XA0pyvaZHKIhHEtdpGqzmcGy-VAlo=",
        followers: 204,
    },
    {
        name: "Jazz Vibes",
        image: "https://images.pexels.com/photos/8833785/pexels-photo-8833785.jpeg",
        followers: 204,
    },
    {
        name: "Jazz Vibes",
        image: "https://images.pexels.com/photos/11750205/pexels-photo-11750205.jpeg",
        followers: 204,
    },
]

export default function Catalog() {

    if (catalog.length === 0) {
        return null
    }

    return (
        <section>
            <h2 className="text-3xl font-semibold">Catalog</h2>
            <div className="text-gray font-mono">{catalog.length} result{catalog.length > 0 && 's'}</div>
            <div className="columns-4 gap-0">
                {
                    catalog.map((station, index) => (
                        <div className="w-full p-4 break-inside-avoid">
                            <StationCard key={index} props={station} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}