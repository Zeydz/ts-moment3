import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ValueConversionComponent } from './value-conversion/value-conversion.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'value-conversion', component: ValueConversionComponent},
    { path: 'navigation', component: NavigationComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '404', component: NotFoundComponent},
    { path: '**', component: NotFoundComponent}
];
