import {Component, OnInit} from '@angular/core';
import {httpjiekou_xitong} from "../../qianhoutongyong/http.jiekou";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
    selector: 'app-dengluye',
    templateUrl: './dengluye.component.html',
    styleUrls: ['./dengluye.component.css']
})
export class DengluyeComponent implements OnInit
{
    dengluxinxi: httpjiekou_xitong.denglu.Req = {
        zhanghao: environment.kaifadengluxinxi.zhanghao,
        mima: environment.kaifadengluxinxi.mima
    }

    constructor(
        private readonly httpService: HttpService,
        private readonly route: Router,
    )
    {
    }

    ngOnInit(): void
    {
    }

    private qingqiudenglu()
    {
        this.httpService.xitong_denglu(this.dengluxinxi)
            .subscribe(async () => await this.route.navigateByUrl('zhuye/peiliaoguanli'))
    }
}