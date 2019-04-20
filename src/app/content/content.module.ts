import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ContentRouting} from './content.routing';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
  ],
  exports: [
    HomeComponent,
    ContentRouting
  ],
  providers: []
})
export class ContentModule { }
