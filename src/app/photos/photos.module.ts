import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';


@NgModule({
  declarations: [
    PhotoComponent, 
    PhotoListComponent, 
    PhotoFormComponent
  ],
  imports: [
     HttpClientModule,
     CommonModule // Possui somente a declaraçao das diretivas(NGif, NGfor etc..)
    ]
})
export class PhotosModule {}
