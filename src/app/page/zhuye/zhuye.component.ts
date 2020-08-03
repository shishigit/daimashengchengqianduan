import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../../service/http.service";

@Component({
    selector: 'app-zhuye',
    templateUrl: './zhuye.component.html',
    styleUrls: ['./zhuye.component.css']
})
export class ZhuyeComponent implements OnInit
{

    constructor(
        private readonly httpService: HttpService,
        private readonly route: Router
    )
    {
    }

    ngOnInit(): void
    {
    }

    async tuichudenglu()
    {
        this.httpService.xitong_tuichu({}).subscribe()
        await this.route.navigateByUrl('denglu')
    }
}
