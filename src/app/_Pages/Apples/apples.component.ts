import { Component, OnInit } from '@angular/core';

import { GetIndexService } from '../../services/get-index/get-index.service';

@Component({
    selector: 'app-apples',
    templateUrl: 'apples.component.html',
    styleUrls: ['../pages.css']
})

export class ApplesComponent implements OnInit {

    index: number;

    constructor (private _GetIndexService: GetIndexService ) { }

    ngOnInit() {
        this._GetIndexService.currentIndex.subscribe(x => this.index = x);
        this.index = 3;
        this._GetIndexService.changeIndex(this.index);
        console.log('apples: ' + this.index);
    }
}
