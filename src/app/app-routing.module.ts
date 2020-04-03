import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { WorkSingleComponent } from './work/work-single/work-single.component';
import { ProcessComponent } from './process/process.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { animation: 'homeAnm' }
  },
  {
    path: 'about-me',
    component: AboutComponent,
    data: { title: 'About me', animation: 'aboutAnm' }
  },
  {
    path: 'selected-works',
    component: WorkComponent,
    data: { title: 'Selected Works', animation: 'workAnm'}
  },
  {
    path: 'selected-work/:slugname',
    component: WorkSingleComponent,
    data: { animation: 'singleWorkAnm' }
  },
  {
    path: 'work-process',
    component: ProcessComponent,
    data: { title: 'Process', animation: 'processAnm' }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { animation: 'errorAnm' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
