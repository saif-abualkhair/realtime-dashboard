import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
