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
        <div>
            <div
                className="relative w-full h-full overflow-hidden"
                style={{ aspectRatio: square ? "1 / 1" : "auto" }}
            >
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
            <h6 className="font-semibold">{name}</h6>
            <span className="text-gray">{followers} followers</span>
        </div>
    );
}
