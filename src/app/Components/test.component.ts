import { Component, OnInit } from '@angular/core';

import { TestService } from '../Services/test.service';

@Component({
    selector: 'test',
    templateUrl: './test.template.html'
})

export class TestComponent implements OnInit {
    public apiUrl = "";
    public result: any;
    public log: any;
    public count: any;

    constructor(
        private _testService: TestService
    ) {
        this.getCount();
    }

    ngOnInit() { }

    public getInfo() {
        this._testService.getInfo(this.apiUrl).subscribe(
            data => {
                this.log = "Başarılı";
                this.result = JSON.stringify(data);
                this._testService.updateCount(parseInt(this.count) + 1).subscribe(x => { this.getCount(); });
            },
            error => {
                this.result = "";
                this.log = error;
            }
        );
    }

    public getCount() {
        this._testService.getCount().subscribe(data => { this.count = data.sayac; });
    }
}