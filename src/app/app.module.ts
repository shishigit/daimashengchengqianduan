import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DengluyeComponent} from "./page/dengluye/dengluye.component";
import {
    NzButtonModule,
    NzCardModule,
    NzInputModule,
    NzNotificationModule,
    NzNotificationServiceModule
} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent, DengluyeComponent
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
        NzNotificationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
