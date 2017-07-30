/* Angular modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '@angular/material';


/* My Components */
import { AuthComponent } from './auth/auth.component';
import { CoreModule } from "app/core/core.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule,
    CoreModule
  ],
  declarations: [AuthComponent],
  exports:[AuthComponent]
})
export class LoginModule { }
