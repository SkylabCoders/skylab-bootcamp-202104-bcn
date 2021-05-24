import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes : Routes = [
    {path: '', component: DashboardComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroes', component: HeroDetailComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}