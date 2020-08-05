import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {httpjiekou_hongtian} from "../../../qianhoutongyong/http.jiekou";

const tianjia_yuanshishuju = {
    mingcheng: '',
    beizhu: '',
    type: ''
}

@Component({
    selector: 'app-hongtian',
    templateUrl: './hongtian.component.html',
    styleUrls: ['./hongtian.component.css']
})
export class HongtianComponent implements OnInit
{
    xiangmu_list: httpjiekou_hongtian.chaxun.Res[] = [];
    chaxunxinxi = {
        mingcheng: ''
    };
    xianshitianjia: boolean = false;
    tianjiaxinxi = {...tianjia_yuanshishuju};

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
        this.httpService.hongtian_chaxun(this.chaxunxinxi)
            .subscribe(value => this.xiangmu_list = value)
    }

    tianjiandianji()
    {
        this.xianshitianjia = true
    }

    quedingtianjia()
    {
        // TODO
    }

    quxiaotianjia()
    {
        // TODO
    }
}
