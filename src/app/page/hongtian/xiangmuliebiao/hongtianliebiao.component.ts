import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../service/http.service";
import {httpjiekou_hongtian} from "../../../../qianhoutongyong/http.jiekou";
import {HongtianService} from "../hongtian.service";
import {Router} from "@angular/router";

const tianjia_yuanshishuju = {
    mingcheng: '',
    beizhu: '',
    shujukuid: 0
}

@Component({
    selector: 'app-hongtianliebiao',
    templateUrl: './hongtianliebiao.component.html',
    styleUrls: ['./hongtianliebiao.component.css']
})
export class HongtianliebiaoComponent implements OnInit
{
    xiangmu_list: httpjiekou_hongtian.chaxun.Res[] = [];
    chaxunxinxi = {
        mingcheng: ''
    };
    xianshitianjia: boolean = false;
    tianjiaxinxi = {...tianjia_yuanshishuju};

    constructor(
        private httpService: HttpService,
        private hongtianService: HongtianService,
        private route: Router
    )
    {
    }

    ngOnInit(): void
    {
        this.huoqushuju()
    }


    huoqushuju()
    {
        this.httpService.hongtian_chaxun(this.chaxunxinxi)
            .subscribe(value => this.xiangmu_list = value)
    }

    tianjiandianji()
    {
        this.xianshitianjia = true
    }

    quedingtianjia()
    {
        this.httpService.hongtian_tianjia(this.tianjiaxinxi)
            .subscribe(value =>
            {
                this.xianshitianjia = false
                this.tianjiaxinxi = {...tianjia_yuanshishuju}
                this.huoqushuju()
            })
    }

    quxiaotianjia()
    {
        this.xianshitianjia = false
        this.tianjiaxinxi = {...tianjia_yuanshishuju}
    }

    shangchu(id: number)
    {
        this.httpService.hongtian_shanchu({id})
            .subscribe(() =>
            {
                this.huoqushuju()
            })
    }

    async shengchengdaima(id: number)
    {
        this.hongtianService.daimashengchengid = id
        await this.route.navigateByUrl('zhuye/hongtian/daima')
    }
}
