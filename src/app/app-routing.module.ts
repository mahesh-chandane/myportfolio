import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'ports',
    pathMatch:'full'
  },
  {
    path : 'ports',
    component :PortfolioComponent
  },
  {
    path : 'myport',
    component :MyPortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
