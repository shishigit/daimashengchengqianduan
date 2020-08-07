import {Component, OnInit} from '@angular/core';

interface shitishuxing
{
    mingcheng: string
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

    constructor()
    {
    }

    ngOnInit(): void
    {
    }

}
