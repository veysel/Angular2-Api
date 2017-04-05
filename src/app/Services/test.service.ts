import { Injectable } from '@angular/core';

import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class TestService {
    private countUrl = "https://api.myjson.com/bins/12mz97";
    private headers: Headers;

    constructor(
        private _http: Http
    ) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');

    }

    public getInfo(apiUrl: string) {
        return this._http.get(apiUrl, this.headers).map(x => x.json());
    }

    public getCount() {
        return this._http.get(this.countUrl, this.headers).map(x => x.json());
    }

    public updateCount(count) {
        return this._http.put(this.countUrl, { sayac: count }).map(x => x.json());
    }

}