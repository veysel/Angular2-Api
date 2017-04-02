import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'test',
    templateUrl: './test.template.html'
})

export class TestComponent implements OnInit {
    public apiUrl = "";
    public result = "test";

    constructor() {
    }

    ngOnInit() { }

    public getInfo() {
        this.result = this.apiUrl + "\n" + this.result;
    }
}