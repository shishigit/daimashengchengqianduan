import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

interface shitishuxing
{
    lieming: string
    leixing: 'string' | 'number'
    beizhu: string,
    weiyi: boolean,
    feikong: boolean
}

@Component({
    selector: 'app-jjyts-kubiao',
    templateUrl: './jjyts-kubiao.component.html',
    styleUrls: ['./jjyts-kubiao.component.css']
})
export class JjytsKubiaoComponent implements OnInit
{
    chuangjianxinxi: {
        biaoming: string,
        shuxings: shitishuxing[]
    } = {
        biaoming: '',
        shuxings: []
    }

    constructor(
        private route: Router
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
            lieming: 'new_col'
        })
    }

    async fanhuiliebiao()
    {
        await this.route.navigateByUrl('zhuye/jjyts/xiangmu')
    }
}
