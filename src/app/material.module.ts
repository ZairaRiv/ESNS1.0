import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatDialogModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule, 
        MatToolbarModule, 
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ], 
    exports: [
        MatButtonModule, 
        MatToolbarModule, 
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ], 
})

export class MaterialModule {}