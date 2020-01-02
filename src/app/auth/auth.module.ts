import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModulesModule } from '../shared/shared-modules.module';
import { SharedComponentsModule } from '../shared/shared-components.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    SharedModulesModule,
    SharedComponentsModule
  ]
})
export class AuthModule { }
