import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DengluyeComponent} from "./page/dengluye/dengluye.component";
import {
    NzButtonModule,
    NzCardModule,
    NzDrawerModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzNotificationModule,
    NzNotificationServiceModule
} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ZhuyeComponent} from './page/zhuye/zhuye.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GerenzhongxinComponent} from './page/gerenzhongxin/gerenzhongxin.component';
import {HongtianhoutaiComponent} from './page/hongtian/hongtianhoutai/hongtianhoutai.component';
import {ShujuyuanComponent} from './page/shujuyuan/shujuyuan.component';
import {ChoutiComponent} from './zujian/chouti/chouti.component';

@NgModule({
    declarations: [
        AppComponent, DengluyeComponent, ZhuyeComponent, GerenzhongxinComponent, HongtianhoutaiComponent, ShujuyuanComponent, ChoutiComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NzCardModule,
        NzInputModule,
        NzNotificationServiceModule,
        FormsModule,
        NzButtonModule,
        HttpClientModule,
        NzNotificationModule,
        NzLayoutModule,
        NzMenuModule,
        BrowserAnimationsModule,
        NzDrawerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
