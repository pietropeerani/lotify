import type { StationProps } from "./stations";

export interface StationCardProps {
    props: StationProps;
    square?: boolean;
    onClick?: () => void;
}