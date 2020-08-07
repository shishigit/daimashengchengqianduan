import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-jjyts-daima',
    templateUrl: './jjyts-daima.component.html',
    styleUrls: ['./jjyts-daima.component.css']
})
export class JjytsDaimaComponent implements OnInit
{
    constructor(
        private route: Router,
    )
    {
    }

    ngOnInit(): void
    {
    }

    async fanhuiliebiao()
    {
        await this.route.navigateByUrl('zhuye/jjyts/xiangmu')
    }
}
