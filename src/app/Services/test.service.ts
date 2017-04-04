import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class TestService {

    constructor(
        private _http: Http
    ) {

    }

    public getInfo(apiUrl: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        return this._http.get(apiUrl, headers).map(x => x.json());
    }


}