import { StaticImageData } from "next/image";

export interface FeactureDetails {
    image: StaticImageData,
    title: string,
    text: string,
    reverse?: boolean
}