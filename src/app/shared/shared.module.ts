import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from 'src/app/shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { AddSpacePipe } from '../core/custom-pipes';
import { Ng5BreadcrumbModule } from 'ng5-breadcrumb';
import { ToastrModule } from 'ngx-toastr';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AddSpacePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
    NgxPrintModule,
    FlexLayoutModule,
    Ng5BreadcrumbModule.forRoot(),
    ToastrModule.forRoot(),
    SlickCarouselModule,
    FileUploadModule
  ],
  exports: [
    AddSpacePipe,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    NgxPrintModule,
    FlexLayoutModule,
    Ng5BreadcrumbModule,
    ToastrModule,
    SlickCarouselModule,
    FileUploadModule
  ]
})
export class SharedModule { }
