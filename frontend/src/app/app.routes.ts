import { Routes } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component';
import { AboutComponent } from '../app/pages/about/about.component';
import { GalleryComponent } from '../app/pages/gallery/gallery.component';
import { BookPerformanceComponent } from '../app/pages/book-performance/book-performance.component';
import { AdminDashboardComponent } from '../app/pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'book', component: BookPerformanceComponent },
  { path: 'admin', component: AdminDashboardComponent }
];