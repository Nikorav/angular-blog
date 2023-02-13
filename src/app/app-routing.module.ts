import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {PostPageComponent} from "./components/post-page/post-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'post/:id', component: PostPageComponent
      },
      {
        path: '', redirectTo: '/', pathMatch: 'full'
      },
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
