import { Ccy } from "./converter.types";

export interface Currency {
    ccy: Ccy,
    base_ccy: Ccy,
    buy: number,
    sell: number,
}
