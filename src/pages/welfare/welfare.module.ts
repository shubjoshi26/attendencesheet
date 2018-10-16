import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelfarePage } from './welfare';

@NgModule({
  declarations: [
    WelfarePage,
  ],
  imports: [
    IonicPageModule.forChild(WelfarePage),
  ],
})
export class WelfarePageModule {}
