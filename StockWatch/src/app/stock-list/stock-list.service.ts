import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {StockListApi} from './stock-list.api'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class StockListService {

    constructor(private http:Http, private stockListApi: StockListApi) {

    }

    getStocks(stockSymbols: string[]): Observable<any> {
        var observable = Observable.create((observer) => {
            stockSymbols.map((symbol) => {

                Observable.forkJoin(
                    this.stockListApi.getStockTSDIntra(symbol,true),
                    this.stockListApi.getStockEMA(symbol)
                ).subscribe(res => {
                    var intra = this.getMostRecentPriceFromRespose(res[0], "1min");
                    var emaJSON = this.getMostRecentEMAFromResponse(res[1])
                })
            })
        })
       
        
        return null;
    }

    getMostRecentPriceFromRespose(responseJson, interval) {
        var lastRefreshed = responseJson["Meta Data"]["3. Last Refreshed"]
        return responseJson["Time Series (" + interval + ")"][lastRefreshed]
    }
    
    getMostRecentEMAFromResponse(responseJson) {
        var lastRefreshed = responseJson["Meta Data"]["3. Last Refreshed"]
        return responseJson["Technical Analysis: EMA"][lastRefreshed.substring(0,lastRefreshed.length-2)]
    }

    

}