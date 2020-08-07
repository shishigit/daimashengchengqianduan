import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {jjyts_lieleixing_array} from "../../../../qianhoutongyong/tongyongjiegou";
import {HttpService} from "../../../../service/http.service";
import {httpjiekou_jjyts} from "../../../../qianhoutongyong/http.jiekou";


@Component({
    selector: 'app-jjyts-kubiao',
    templateUrl: './jjyts-kubiao.component.html',
    styleUrls: ['./jjyts-kubiao.component.css']
})
export class JjytsKubiaoComponent implements OnInit
{
    lieleixing = jjyts_lieleixing_array
    chuangjianxinxi: httpjiekou_jjyts.chuangjiankubiao.req = {
        biaoming: '',
        shuxings: []
    }

    constructor(
        private route: Router,
        private httpService: HttpService
    )
    {
    }

    ngOnInit(): void
    {
    }

    xinzhengshuxing()
    {
        this.chuangjianxinxi.shuxings.push({
            feikong: false,
            weiyi: false,
            beizhu: '未备注',
            leixing: 'string',
            lieming: 'new_col',
            zhujian: false
        })
    }

    async fanhuiliebiao()
    {
        await this.route.navigateByUrl('zhuye/jjyts/xiangmu')
    }

    shanchushuxing(lieming: string)
    {
        this.chuangjianxinxi.shuxings = this.chuangjianxinxi.shuxings
            .filter(value => value.lieming !== lieming)
    }

    chuangjiankubiao()
    {
        this.httpService.jjyts_chuangjiankubiao(this.chuangjianxinxi)
    }

    zhujiangaibian(data: boolean, lieming: string)
    {
        if (!data) return
        this.chuangjianxinxi.shuxings.forEach(value => value.zhujian = value.lieming === lieming)

    }
}
