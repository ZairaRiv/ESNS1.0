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
} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
        ReactiveFormsModule,
        MatProgressSpinnerModule,
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
        ReactiveFormsModule,
        MatProgressSpinnerModule,
    ],
})

export class MaterialModule {}
