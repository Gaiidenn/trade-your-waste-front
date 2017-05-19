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
  MdIconModule,
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
    MdIconModule,
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
    MdIconModule,
  ]
})
export class AngularMaterialModule { }
