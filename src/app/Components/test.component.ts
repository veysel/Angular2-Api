import { Component, OnInit } from '@angular/core';

import { TestService } from '../Services/test.service';

@Component({
    selector: 'test',
    templateUrl: './test.template.html'
})

export class TestComponent implements OnInit {
    public apiUrl = "";
    public result = "test";

    constructor(
        private _testService: TestService
    ) {
    }

    ngOnInit() { }

    public getInfo() {
        this._testService.getInfo(this.apiUrl).subscribe(x => {
            this.result = x;
        });
    }
}