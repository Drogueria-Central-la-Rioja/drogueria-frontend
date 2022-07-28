import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
{path:'', component:LoginComponent},
{path:'navigation', component:NavigationComponent},
{path:'reportes', component: ReportesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
