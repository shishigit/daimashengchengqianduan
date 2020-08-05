import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {httpjiekou_shujuyuan} from "../../../qianhoutongyong/http.jiekou";

@Component({
    selector: 'app-shujukuliebiao',
    templateUrl: './shujukuliebiao.component.html',
    styleUrls: ['./shujukuliebiao.component.css']
})
export class ShujukuliebiaoComponent implements OnInit
{
    @Input() xuanqushujuku: number = 0;
    @Output() xuanqushujukuChange = new EventEmitter<number>()

    shujuyuan_list: httpjiekou_shujuyuan.xialacaidan.Res[] = [];

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
        this.httpService.shujuyuan_xialacaidan({})
            .subscribe(value => this.shujuyuan_list = value)
    }

    change(data: number)
    {
        this.xuanqushujukuChange.emit(data)
    }
}
