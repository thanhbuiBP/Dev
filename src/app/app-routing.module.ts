import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: 'landing', pathMatch: 'full'},

  { path: 'landing', loadChildren: './main/landing-page/landing-page.module#LandingPageModule'}
];

@NgModule({
    declarations: [
      ],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
