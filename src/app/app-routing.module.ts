import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { FardigheterComponent } from './views/fardigheter/fardigheter.component';
import { HomeComponent } from './views/home/home.component';
import { KontaktComponent } from './views/kontakt/kontakt.component';
import { UtbildningarComponent } from './views/utbildningar/utbildningar.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'utbildningar', component: UtbildningarComponent },
  { path:'fardigheter', component: FardigheterComponent },
  { path: 'kontakt', component: KontaktComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
