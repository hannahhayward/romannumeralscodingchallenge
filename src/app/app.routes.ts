import { Routes, RouterModule } from '@angular/router';
import { DecoderLogicComponent } from './decoder-logic/decoder-logic.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', component: DecoderLogicComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
