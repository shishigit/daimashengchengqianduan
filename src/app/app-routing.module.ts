import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DengluyeComponent} from "./page/dengluye/dengluye.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'denglu'
    },
    {
        path: 'denglu',
        component: DengluyeComponent
    },];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
