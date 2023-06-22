import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './Forms/assignment/assignment.component';
import { RecieptComponent } from './Forms/reciept/reciept.component';
import { RepositoryComponent } from './Forms/repository/repository.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren:()=>import('./Forms/repository/repository.module').then(c=>c.RepositoryModule),
    component: RepositoryComponent
  },
  {
    path: 'assignment',
    loadChildren:()=>import('./Forms/assignment/assignment.module').then(c=>c.AssignmentModule),
    component: AssignmentComponent
  },
  {
    path: 'reciept',
    loadChildren: ()=>import('./Forms/reciept/reciept.module').then(c=>c.RecieptModule),
    component: RecieptComponent
  },
  {
    path: '', redirectTo: 'products', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'products', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
