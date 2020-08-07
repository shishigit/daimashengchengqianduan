import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DengluyeComponent} from "./page/dengluye/dengluye.component";
import {ZhuyeComponent} from "./page/zhuye/zhuye.component";
import {GerenzhongxinComponent} from "./page/gerenzhongxin/gerenzhongxin.component";
import {ShujuyuanComponent} from "./page/shujuyuan/shujuyuan.component";
import {HongtianliebiaoComponent} from "./page/hongtian/xiangmuliebiao/hongtianliebiao.component";
import {HongtiandaimaComponent} from "./page/hongtian/hongtiandaima/hongtiandaima.component";
import {JjytsXiangmuComponent} from "./page/jjyts/jjyts-xiangmu/jjyts-xiangmu.component";

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
                redirectTo: 'hongtian/liebiao',
                pathMatch: 'full'
            },
            {
                path: 'hongtian/liebiao',
                component: HongtianliebiaoComponent
            },
            {
                path: 'hongtian/daima',
                component: HongtiandaimaComponent
            },
            {
                path: 'jjyts',
                redirectTo: 'jjyts/xiangmu',
                pathMatch: 'full'
            },
            {
                path: 'jjyts/xiangmu',
                component: JjytsXiangmuComponent
            },
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
