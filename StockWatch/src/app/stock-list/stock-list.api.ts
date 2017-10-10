import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class StockListApi {
    baseUri:string;
    apiKey:string;

    constructor(private http:Http) {
        this.baseUri = "https://www.alphavantage.co/query"
        this.apiKey = "D71PY8DFKC9TLND9"
    }
    
    getStockMACD(symbol: string): Observable<any> {
        //todo
        return null
    }

    getStockEMA(symbol: string) : Observable<any> {
        var func_type = "EMA"
        var interval = "1min"
        var series_type = "close"
        var time_period = "15"
        //todo
        return this.http.get(this.baseUri, {
            params: new HttpParams().set("function", func_type)
                                .set("symbol", symbol)
                                .set("interval", interval)
                                .set("time_period", time_period)
                                .set("series_type", series_type)
                                .set("api_key", this.apiKey)
        }).map((res: Response) => res.json());
    }

    getStockTSDIntra(symbol: string, isCompact: boolean): Observable<any> {
        var func_type="TIME_SERIES_INTRADAY"
        var compact = isCompact ? "compact" : "full"
        var interval = "1min"
        
        //todo
        return this.http.get(this.baseUri, {
            params: new HttpParams().set("function", func_type)
                                .set("symbol", symbol)
                                .set("interval", interval)
                                .set("outputsize", compact)
                                .set("api_key", this.apiKey)
        }).map((res: Response) => res.json());
    }
}