import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';

export const routes: Routes = [
{
    path:'',
    redirectTo:'data-binding',
    pathMatch:'full'
},

{
    path:'admin',
    component:AdminComponent
},
{
    path:'data-binding',
    component:DataBindingComponent
},
{
    path:'ng-class',
    component:NgClassComponent
}
,
{
    path:'admin/:id',
    component:AdminComponent
}


];
