import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TestService {

    constructor(
        private _http: Http
    ) {

    }

    public getInfo(apiUrl: string) {
        return this._http.get(apiUrl).map(x => x.json());
    }


}