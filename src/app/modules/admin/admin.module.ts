import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {AdminLayoutComponent} from './components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';

const routes: Route =
  {
    path: '', component: AdminLayoutComponent, children: [
      {
        path: 'login', component: LoginPageComponent,
      },
      {
        path: 'dashboard', component: DashboardPageComponent,
      },
      {
        path: 'create', component: CreatePageComponent,
      },
      {
        path: 'post/:id/edit', component: EditPageComponent,
      },
      {
        path: '', redirectTo: '/admin/login', pathMatch: 'full',
      },
    ]
  }

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([routes])
  ],
  exports: [
    RouterModule,
  ],
})
export class AdminModule {

}
