import {Routes, RouterModule, Router} from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';

const app_routes: Routes = [
    {path : 'home', component : InicioComponent},
    {path : '**', pathMatch : 'full', redirectTo : 'home'}
];

@NgModule({
    imports : [
        RouterModule.forRoot(app_routes, {useHash : true})
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule{}