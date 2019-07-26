import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { StockControlComponent } from './pages/stock-control/stock-control.component';


const routes: Routes = [{
  path: '',
  loadChildren: './pages/login/login.module#LoginModule'
},

{path: 'dashboard', component: SidenavComponent,
   children: [ { path: 'controlStock', component: StockControlComponent }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
