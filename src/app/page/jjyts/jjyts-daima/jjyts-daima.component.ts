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
    selector: 'app-jjyts-daima',
    templateUrl: './jjyts-daima.component.html',
    styleUrls: ['./jjyts-daima.component.css']
})
export class JjytsDaimaComponent implements OnInit
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


    async fanhuiliebiao()
    {
        await this.route.navigateByUrl('zhuye/jjyts/liebiao')
        this.shengchengxinxi = {...yuanshi_shengchengxinxi}
    }


    shengchengdaima()
    {
        this.shengchengxinxi.shujukuid = this.jjytsService.daimashengcheng_shujukuid
        this.httpService.jjyts_shengchengdaima(this.shengchengxinxi)
    }

}
