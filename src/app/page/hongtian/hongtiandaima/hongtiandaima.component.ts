import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../../../service/http.service";

@Component({
    selector: 'app-hongtiandaima',
    templateUrl: './hongtiandaima.component.html',
    styleUrls: ['./hongtiandaima.component.css']
})
export class HongtiandaimaComponent implements OnInit
{

    constructor(
        private route: Router,
        private httpService: HttpService
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
