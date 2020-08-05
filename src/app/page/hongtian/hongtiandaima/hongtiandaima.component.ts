import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-hongtiandaima',
    templateUrl: './hongtiandaima.component.html',
    styleUrls: ['./hongtiandaima.component.css']
})
export class HongtiandaimaComponent implements OnInit
{

    constructor(
        private route: Router
    )
    {
    }

    ngOnInit(): void
    {
    }

    async fanhuiliebiao()
    {
        await this.route.navigateByUrl('zhuye/hongtian/liebiao')
    }
}
