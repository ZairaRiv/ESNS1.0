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
    MatGridListModule
} from '@angular/material';


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
        MatCheckboxModule
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
        MatCheckboxModule
    ],
})

export class MaterialModule {}
