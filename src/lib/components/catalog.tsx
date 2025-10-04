import stations from "../data/stations"
import StationCard from "./station-card"

export default function Catalog() {

    if (stations.length === 0) {
        return null
    }

    return (
        <section>
            <h2 className="text-3xl font-semibold">Catalog</h2>
            <div className="text-gray font-mono">{stations.length} result{stations.length > 0 && 's'}</div>
            <div className="columns-4 gap-0">
                {
                    stations.map((station, index) => (
                        <div key={index} className="w-full p-4 break-inside-avoid">
                            <StationCard props={station} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}