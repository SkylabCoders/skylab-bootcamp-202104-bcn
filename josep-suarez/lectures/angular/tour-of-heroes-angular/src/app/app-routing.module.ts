import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from "./components/heroes/heroes.component";

const routes: Routes = [
    { path: '', component:HeroesComponent},
    { path: 'detail', component: HeroDetailComponent},
    { path: '**', redirectTo: '/', pathMatch: ''}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}