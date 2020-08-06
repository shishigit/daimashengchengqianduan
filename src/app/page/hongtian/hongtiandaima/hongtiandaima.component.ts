import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../../../service/http.service";
import {HongtianService} from "../hongtian.service";

const yuanshi_shengchengxinxi = {
    shujukuid: 0,
    kubiao: '',
    baoming: ''
}

@Component({
    selector: 'app-hongtiandaima',
    templateUrl: './hongtiandaima.component.html',
    styleUrls: ['./hongtiandaima.component.css']
})
export class HongtiandaimaComponent implements OnInit
{
    shengchengxinxi = {...yuanshi_shengchengxinxi}

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
        this.shengchengxinxi = {...yuanshi_shengchengxinxi}
    }


    shengchengdaima()
    {
        this.shengchengxinxi.shujukuid = this.hongtianService.daimashengcheng_shujukuid
        this.httpService.hongtian_shengchengdaima(this.shengchengxinxi)
    }
}
