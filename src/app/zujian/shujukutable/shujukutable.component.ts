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
    @Input() xuanqubiao: string = '';
    @Output() xuanqubiaoChange = new EventEmitter<string>()

    shujuyuan_list: httpjiekou_shujuyuan.table.Res = [];

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
                this.shujuyuan_list = value
            })
    }

    change(data: string)
    {
        this.xuanqubiaoChange.emit(data)
    }
}
