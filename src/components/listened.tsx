import type { StationProps } from "./station-card"
import StationCard from "./station-card"

const listened: StationProps[] = [
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
]

export default function Listened() {

    if (listened.length === 0) {
        return null
    }

    return (
        <section>
            <h2 className="text-3xl font-semibold">Listened recently</h2>
            <div className="text-gray font-mono">{listened.length} result{listened.length > 0 && 's'}</div>
            <div className="flex">
                {
                    listened.map((station, index) => (
                        <div className="w-1/4 p-4">
                            <StationCard key={index} props={station} square />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}