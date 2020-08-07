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

    listOfData = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];

    xinzhengshuxing()
    {
        // TODO 
    }


    async fanhuiliebiao()
    {
        await this.route.navigateByUrl('zhuye/jjyts/xiangmu')
    }
}
