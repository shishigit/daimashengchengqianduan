import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DengluyeComponent} from "./page/dengluye/dengluye.component";
import {ZhuyeComponent} from "./page/zhuye/zhuye.component";
import {GerenzhongxinComponent} from "./page/gerenzhongxin/gerenzhongxin.component";
import {ShujuyuanComponent} from "./page/shujuyuan/shujuyuan.component";
import {HongtianComponent} from "./page/hongtian/hongtian.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'denglu'
    },
    {
        path: 'denglu',
        component: DengluyeComponent
    },
    {
        path: 'zhuye',
        component: ZhuyeComponent,
        children: [
            {
                path: 'gerenzhongxin',
                component: GerenzhongxinComponent
            },
            {
                path: 'shujuyuan',
                component: ShujuyuanComponent
            },
            {
                path: 'hongtian',
                component: HongtianComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
