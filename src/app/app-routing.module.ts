import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DengluyeComponent} from "./page/dengluye/dengluye.component";
import {ZhuyeComponent} from "./page/zhuye/zhuye.component";

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
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
