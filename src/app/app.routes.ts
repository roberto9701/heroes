import { Routes, RouterModule } from '@angular/router';
// las rutas que se nesesiten tienen que estar importadas
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'heroes', component: HeroesComponent },
    {path: 'about', component: AboutComponent },

    // el ultimo componente, es donde se redirecciona en caso de no encontrar una ruta
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});




