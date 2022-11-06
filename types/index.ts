export interface HomeGraphTooltipInfo {
  date: string;
  prices:
    | {
        stockMetric: string;
        price: number;
      }[]
    | undefined;
  x: number;
  y: number;
}

export interface StockDay {
  stockMetric: string;
  colorClass: string;
  values: {
    date: string;
    value: number;
  }[];
}

export type Stocks = StockDay[];
