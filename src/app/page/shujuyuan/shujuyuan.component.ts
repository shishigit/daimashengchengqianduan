import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {httpjiekou_shujuyuan} from "../../../qianhoutongyong/http.jiekou";

const yuanshitianjiaxinxi = {
    mingcheng: '',
    type: 'mysql',
    host: '',
    port: 0,
    username: '',
    password: '',
    database: '',
}


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
    tianjiaxinxi = {...yuanshitianjiaxinxi};

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

    quedingtianjia()
    {
        this.httpService.shujuyuan_tianjia(this.tianjiaxinxi)
            .subscribe(() =>
            {
                this.xianshitianjia = false
                this.tianjiaxinxi = {...yuanshitianjiaxinxi}
                this.huoqushuju()
            })
    }

    quxiaotianjia()
    {
        this.xianshitianjia = false
        this.tianjiaxinxi = {...yuanshitianjiaxinxi}
    }

    shangchu(id: number)
    {
        this.httpService.shujuyuan_shanchu({id})
            .subscribe(() =>
            {
                this.huoqushuju()
            })
    }
}
