import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {
  catchError,
  tap,
  map,
  switchMap,
  withLatestFrom,
  mergeMap,
  merge
} from "rxjs/operators";
import { combineLatest } from "rxjs";
import { timer } from "rxjs/internal/observable/timer";

export enum API_FUNCTIONS {
  DIGITAL_CURRENCY_INTRADAY = "DIGITAL_CURRENCY_INTRADAY",
  TIME_SERIES_DAILY = "TIME_SERIES_DAILY"
}

export interface TimeSeries {
  [key: string]: TimeSerie;
}

export interface TimeSerie {
  "1. open": number;
  "2. high": number;
  "3. low": number;
  "4. close": number;
  "5. adjusted close": number;
  "6. volume": number;
  "7. dividend amount": number;
  "8. split coefficient": number;
}

interface Security {
  name: string;
  symbol: string;
  fn: API_FUNCTIONS;
}

export const API_KEY = "UWHM1X2V3VXVFWR9";
export const API_URL = "https://www.alphavantage.co";

export const SECURITIES: Array<Security> = [
  {
    symbol: "SPX",
    name: "S&P 500",
    fn: API_FUNCTIONS.TIME_SERIES_DAILY
  },
  {
    symbol: "IXIC",
    name: "NASDAQ Composite",
    fn: API_FUNCTIONS.TIME_SERIES_DAILY
  },
  {
    symbol: "DJI",
    name: "Dow Jones Industrial",
    fn: API_FUNCTIONS.TIME_SERIES_DAILY
  },
  {
    symbol: "BTCUSD",
    name: "Bitcoin/USD pair",
    fn: API_FUNCTIONS.DIGITAL_CURRENCY_INTRADAY
  }
];

@Injectable({
  providedIn: "root"
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  getApiUrl(symbol: string, fn: string): string {
    return `${API_URL}/query?function=${fn}&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`;
  }

  getSecurityTimeSerie(
    securityObs: Observable<Security>,
    rangeObs: Observable<number>
  ): Observable<any> {
    // 1 - 1 observable qui GET
    // 2 - un observable qui filter
    // 3 - TIMER

    const i$ = combineLatest(timer(0, 60000), securityObs).pipe(
      mergeMap(([_, security]) => {
        console.log("RETRIEVING SECURITY", security);
        return this.http.get<TimeSeries>(
          this.getApiUrl(security.symbol, security.fn)
        );
      })
    );

    const j$ = combineLatest(rangeObs, i$).pipe(
      map(([range, sec]) => {
        console.log("I AM RUNNING DA FILTERS", sec, range);
        const metadata = sec["Meta Data"];
        const timeSeries = sec["Time Series (Daily)"];
        return [
          {
            name: metadata["2. Symbol"],
            series: Object.entries(timeSeries)
              .slice(0, range)
              .map(([date, value]) => ({
                name: date,
                value: value["1. open"]
              }))
              .reverse()
          }
        ];
      })
    );

    return j$;
  }
}
