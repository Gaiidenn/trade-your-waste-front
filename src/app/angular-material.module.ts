import { NgModule } from '@angular/core';
import {
  MdCoreModule,
  MdCommonModule,
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdGridListModule,
  MdToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MdCoreModule,
    MdCommonModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdToolbarModule,
  ],
  exports: [
    MdCoreModule,
    MdCommonModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdToolbarModule,
  ]
})
export class AngularMaterialModule { }
