import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../../../service/http.service";
import {JjytsService} from "../jjyts.service";

const yuanshi_shengchengxinxi = {
    shujukuid: 0,
    kubiao: '',
    baoming: ''
}

@Component({
    selector: 'app-jjyts-shengcheng',
    templateUrl: './jjyts-shengcheng.component.html',
    styleUrls: ['./jjyts-shengcheng.component.css']
})
export class JjytsShengchengComponent implements OnInit
{
    shengchengxinxi = {...yuanshi_shengchengxinxi}

    constructor(
        private route: Router,
        private httpService: HttpService,
        readonly jjytsService: JjytsService
    )
    {
    }

    ngOnInit(): void
    {
    }

    shengchengdaima()
    {
        this.shengchengxinxi.shujukuid = this.jjytsService.daimashengcheng_shujukuid
        this.httpService.jjyts_shengchengdaima(this.shengchengxinxi)
    }

    async fanhuiliebiao()
    {
        await this.route.navigateByUrl('zhuye/jjyts/xiangmu')
    }
}
