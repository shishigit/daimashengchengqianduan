import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpService} from "../../../service/http.service";

@Component({
    selector: 'app-shujukuleixing',
    templateUrl: './shujukuleixing.component.html',
    styleUrls: ['./shujukuleixing.component.css'],
})
export class ShujukuleixingComponent implements OnInit
{
    @Input() xuanquleixing: string = '';
    @Output() xuanquleixingChange = new EventEmitter()

    leixingliebiao: string[] = [];

    constructor(private httpService: HttpService)
    {
    }

    ngOnInit(): void
    {
        this.huoqushuju()
    }

    huoqushuju()
    {
        this.httpService.zaxiang_shujukuleixing({})
            .subscribe(value =>
            {
                this.leixingliebiao = value
            })
    }
}
