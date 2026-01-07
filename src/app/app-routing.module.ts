import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'double',
    loadChildren: () => import('./osudake/double/double.module').then(m => m.DoublePageModule)
  },
  {
    path: 'lesson',
    loadChildren: () => import('./osudake/lesson/lesson.module').then( m => m.LessonPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
