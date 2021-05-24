import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from "./components/heroes/heroes.component";

const routes: Routes = [
    { path: '', component:DashboardComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'detail/:heroId', component: HeroDetailComponent},
    { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}