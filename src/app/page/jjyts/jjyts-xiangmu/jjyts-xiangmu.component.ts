import {Component, OnInit} from '@angular/core';
import {httpjiekou_jjyts} from "../../../../qianhoutongyong/http.jiekou";
import {HttpService} from "../../../../service/http.service";
import {JjytsService} from "../jjyts.service";
import {Router} from "@angular/router";

const tianjia_yuanshishuju = {
    mingcheng: '',
    beizhu: '',
    shujukuid: 0
}

@Component({
    selector: 'app-jjyts-xiangmu',
    templateUrl: './jjyts-xiangmu.component.html',
    styleUrls: ['./jjyts-xiangmu.component.css']
})
export class JjytsXiangmuComponent implements OnInit
{
    xiangmu_list: httpjiekou_jjyts.chaxun.Res[] = [];
    chaxunxinxi = {
        mingcheng: ''
    };
    xianshitianjia: boolean = false;
    tianjiaxinxi = {...tianjia_yuanshishuju};

    constructor(
        private httpService: HttpService,
        private jjytsService: JjytsService,
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
        this.httpService.jjyts_chaxun(this.chaxunxinxi)
            .subscribe(value => this.xiangmu_list = value)
    }

    tianjiandianji()
    {
        this.xianshitianjia = true
    }

    quedingtianjia()
    {
        this.httpService.jjyts_tianjia(this.tianjiaxinxi)
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
        this.httpService.jjyts_shanchu({id})
            .subscribe(() =>
            {
                this.huoqushuju()
            })
    }

    async shengchengdaima(shujukuid: number)
    {
        this.jjytsService.daimashengcheng_shujukuid = shujukuid
        await this.route.navigateByUrl('zhuye/jjyts/daima')
    }

}
