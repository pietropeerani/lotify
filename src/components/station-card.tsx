export interface StationProps {
    name?: string;
    image?: string;
    description?: string;
    followers?: number;
    url?: string;
}

interface StationCardProps {
    props: StationProps;
    square?: boolean;
}

export default function StationCard({ props, square = false }: StationCardProps) {
    const {
        name = "Untitled Station",
        image = "",
        followers = 0,
    } = props;

    return (
        <div className="group font-mono select-none cursor-pointer">
            <div
                className="relative w-full h-full overflow-hidden"
                style={{ aspectRatio: square ? "1 / 1" : "auto" }}
            >
                <div className="absolute z-20 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="relative p-8 pr-7 bg-white rounded-full w-20 h-20 flex items-center justify-center hover:scale-105 transition-transform duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
                    </div>
                </div>
                <img
                    src={image}
                    alt={name}
                    style={{
                        position: square ? "absolute" : "relative",
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </div>
            <h6 className="font-semibold mt-2">{name}</h6>
            <span className="text-gray">{followers} followers</span>
        </div>
    );
}
