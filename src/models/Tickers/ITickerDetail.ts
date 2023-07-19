
export interface ITickerDetail {
    id: number;
    ticker: string;
    name: string;
    market: string;
    type: string;
    active: number;
    currency_name: string;
    composite_figi: string;
    share_class_figi: string;
    locale: string;
    primary_exchange: string;
    update_date: string;
    cik: string;
    market_cap: number;
    phone_number: string;
    address1: string;
    city: string;
    state: string;
    postal_code: string;
    description: string;
    sic_code: string;
    sic_description: string;
    ticker_root: string;
    homepage_url: string;
    total_employees: number;
    list_date: string;
    logo_url: string;
    icon_url: string;
    share_class_shares_outstanding: number;
    weighted_shares_outstanding: number;
    round_lot: number;
    current_price: number;
}
