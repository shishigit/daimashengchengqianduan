import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DengluyeComponent} from "./page/dengluye/dengluye.component";
import {
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzMenuModule,
    NzNotificationModule,
    NzNotificationServiceModule,
    NzSelectModule,
    NzTableModule,
    NzTypographyModule
} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ZhuyeComponent} from './page/zhuye/zhuye.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GerenzhongxinComponent} from './page/gerenzhongxin/gerenzhongxin.component';
import {ShujuyuanComponent} from './page/shujuyuan/shujuyuan.component';
import {ChoutiComponent} from './zujian/chouti/chouti.component';
import {ShujukuleixingComponent} from './zujian/shujukuleixing/shujukuleixing.component';
import {HongtianliebiaoComponent} from './page/hongtian/xiangmuliebiao/hongtianliebiao.component';
import {ShujukuliebiaoComponent} from './zujian/shujukuliebiao/shujukuliebiao.component';
import {HongtiandaimaComponent} from './page/hongtian/hongtiandaima/hongtiandaima.component';

@NgModule({
    declarations: [
        AppComponent, DengluyeComponent, ZhuyeComponent,
        GerenzhongxinComponent, ShujuyuanComponent,
        ChoutiComponent,
        ShujukuleixingComponent,
        HongtianliebiaoComponent,
        ShujukuliebiaoComponent,
        HongtiandaimaComponent
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
        NzDrawerModule,
        NzTableModule,
        NzDividerModule,
        NzFormModule,
        NzInputNumberModule,
        NzSelectModule,
        NzTypographyModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
