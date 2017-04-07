import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../Services/Common/common.service';

@Component({
    selector: 'main',
    templateUrl: './main.template.html'
})

export class MainComponent implements OnInit {
    public apiUrl = "";
    public result: any;
    public log: any;
    public count: any;

    constructor(
        private _commonService: CommonService
    ) {
        this.getCount();
    }

    ngOnInit() { }

    public getInfo() {
        this._commonService.getInfo(this.apiUrl).subscribe(
            data => {
                this.log = "Başarılı";
                this.result = JSON.stringify(data);
                this._commonService.updateCount(parseInt(this.count) + 1).subscribe(x => { this.getCount(); });
            },
            error => {
                this.result = "";
                this.log = error;
            }
        );
    }

    public getCount() {
        this._commonService.getCount().subscribe(data => { this.count = data.sayac; });
    }
}