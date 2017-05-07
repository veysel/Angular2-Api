import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../Services/Common/common.service';

@Component({
    selector: 'main',
    templateUrl: './main.template.html'
})

export class MainComponent implements OnInit {
    public apiUrl: string;
    public result: any;
    public log: any;
    public count: any;
    public time: any;

    constructor(
        private _commonService: CommonService
    ) {
        this.apiUrl = "";
        this.time = "0";
        this.getCount();
    }

    ngOnInit() { }

    public getInfo() {
        let timeBegin = Date.now();
        this._commonService.getInfo(this.apiUrl).subscribe(
            data => {
                let timeEnd = Date.now();

                this.log = "Başarılı";
                this.result = JSON.stringify(data);
                this.increaseCount();
                this.timeDisplay(timeBegin, timeEnd);
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

    public increaseCount() {
        this._commonService.getCount().subscribe(data => {
            let newCount = parseInt(data.sayac) + 1;
            this._commonService.updateCount(newCount).subscribe(x => { this.getCount(); });
        });
    }

    public timeDisplay(timeBegin, timeEnd) {
        let diff = timeEnd - timeBegin;
        this.time = diff.toString() + " ms";
    }

}