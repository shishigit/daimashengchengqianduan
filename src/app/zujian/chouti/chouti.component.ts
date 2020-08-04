import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NzDrawerPlacement} from "ng-zorro-antd";

@Component({
    selector: 'app-chouti',
    templateUrl: './chouti.component.html',
    styleUrls: ['./chouti.component.css']
})
export class ChoutiComponent implements OnInit
{
    // 显示与否
    @Input() xianshiyufou: boolean = false

    // 标题
    @Input() biaoti: string = '默认标题'

    // 宽度/高度
    @Input() kuanduorgaodu: number = 300

    // 确定点击
    @Output() quedingdianji: EventEmitter<void> = new EventEmitter()

    // 取消点击
    @Output() quxiaodianji: EventEmitter<void> = new EventEmitter()

    // 是否显示取消按钮
    @Input() xianshiquxiao = true

    // 显示位置
    @Input() xianshiweizhi: NzDrawerPlacement = 'right';

    constructor()
    {
    }

    ngOnInit(): void
    {
    }

}
