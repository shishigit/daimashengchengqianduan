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
    @Input() shujukuid: number = 0;
    @Input() xuanqubiao: number = 0;
    @Output() xuanqubiaoChange = new EventEmitter<number>()

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
        this.httpService.shujuyuan_table({shujukuid: this.shujukuid})
            .subscribe(value =>
            {
                // this.shujuyuan_list = value
                // TODO

            })
    }

    change(data: number)
    {
        this.xuanqubiaoChange.emit(data)
    }
}
