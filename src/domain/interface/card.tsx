import { cardVariant } from "../variant/cartVariant";

export interface ICard{
    width?: string;
    height?: string;
    children?: React.ReactNode|React.ReactChild;
    variant: cardVariant;
    onClick: (num: number) => void;
}