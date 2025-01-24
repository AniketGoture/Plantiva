import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { GallaryComponent } from './gallary/gallary.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Homepage route
  { path: 'gallery', component: GallaryComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact', component: ContactComponent}
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
