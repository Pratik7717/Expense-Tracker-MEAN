import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerMainComponent } from './tracker-main/tracker-main.component';

const routes: Routes = [
  {path:'',component:TrackerMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
