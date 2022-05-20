import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ContactComponent } from './contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    ContactComponent
  ],

  imports: [
    ContactRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NgxsModule.forFeature([])
  ],

  providers: [

  ],

})

export class ContactModule { }
