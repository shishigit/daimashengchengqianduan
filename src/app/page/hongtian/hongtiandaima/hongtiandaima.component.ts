import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../../../service/http.service";
import {HongtianService} from "../hongtian.service";

@Component({
    selector: 'app-hongtiandaima',
    templateUrl: './hongtiandaima.component.html',
    styleUrls: ['./hongtiandaima.component.css']
})
export class HongtiandaimaComponent implements OnInit
{
    shengchengxinxi = {
        shujukuid: 0,
        kubiao: ''
    }

    constructor(
        private route: Router,
        private httpService: HttpService,
        readonly hongtianService: HongtianService
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
