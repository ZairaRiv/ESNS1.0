import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
	MatProgressSpinnerModule,
	MatSelectModule,
} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule, FormControl, FormGroupDirective, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatExpansionModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        FormsModule,
        FormsControl,
        FormGroupDirective,
        ReactiveFormsModule,
		MatProgressSpinnerModule,
		MatSelectModule,
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatExpansionModule,
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        FormsModule,
        FormsControl,
        FormGroupDirective,
        ReactiveFormsModule,
		MatProgressSpinnerModule,
		MatSelectModule,
    ],
})

export class MaterialModule {}
