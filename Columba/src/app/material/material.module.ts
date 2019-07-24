import { NgModule } from '@angular/core';
import {MatButtonModule, 
  MatToolbarModule, 
  MatSidenavModule,
  MatTabsModule, MatMenuModule} from '@angular/material';

const material=[MatButtonModule, MatToolbarModule,MatSidenavModule,MatTabsModule, MatMenuModule];
@NgModule({
  declarations: [],
  imports: [
   material
  ], 
  exports: [
   material
  ]
})
export class MaterialModule { }
