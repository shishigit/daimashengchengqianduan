import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {httpjiekou_shujuyuan} from "../../../qianhoutongyong/http.jiekou";

@Component({
    selector: 'app-shujuyuan',
    templateUrl: './shujuyuan.component.html',
    styleUrls: ['./shujuyuan.component.css']
})
export class ShujuyuanComponent implements OnInit
{
    xianshitianjia: boolean = false;
    shujuyuan_list: httpjiekou_shujuyuan.chaxun.Res[] = [];
    chaxunxinxi = {
        mingcheng: ''
    };

    constructor(
        private httpService: HttpService
    )
    {
    }

    ngOnInit(): void
    {
        this.huoqushuju()
    }

    huoqushuju()
    {
        this.httpService.shujuyuan_chaxun(this.chaxunxinxi)
            .subscribe(value =>
            {
                this.shujuyuan_list = value
            })
    }

    tiandiandianji()
    {
        this.xianshitianjia = true
    }
}
