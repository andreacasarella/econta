import { NgModule } from '@angular/core';
import {MomentPipe} from './pipes/moment.pipe';
import {SharedModulesModule} from './shared-modules.module';

const COMPONENTS_AND_PIPES = [
  MomentPipe
];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [SharedModulesModule],
  declarations: COMPONENTS_AND_PIPES,
  exports: COMPONENTS_AND_PIPES,
  entryComponents: ENTRY_COMPONENTS
})
export class SharedComponentsModule { }
