import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiboPage } from './fibo';

@NgModule({
  declarations: [
    FiboPage,
  ],
  imports: [
    IonicPageModule.forChild(FiboPage),
  ],
})
export class FiboPageModule {}
