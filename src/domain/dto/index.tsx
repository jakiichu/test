import { IAdressEntity } from "../entity";

export interface IGetAllAddressDto{
    id: number;
    name: string;
    email: string;
    address: IAdressEntity
}