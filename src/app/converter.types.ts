export type Ccy = 'UAH' | 'USD' | 'EUR'

export type Rates = {
    [key in Ccy]?: number;
}