import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {httpjiekou_shujuyuan} from "../../../qianhoutongyong/http.jiekou";
import {HttpService} from "../../../service/http.service";

@Component({
    selector: 'app-shujukutable',
    templateUrl: './shujukutable.component.html',
    styleUrls: ['./shujukutable.component.css']
})
export class ShujukutableComponent implements OnInit
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
