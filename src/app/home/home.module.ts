import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [MainComponent]
})
export class HomeModule { }
