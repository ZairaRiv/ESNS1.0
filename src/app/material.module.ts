import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatDialogModule, 
    MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, MatExpansionModule  } from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule, 
        MatToolbarModule, 
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatExpansionModule
    ], 
    exports: [
        MatButtonModule, 
        MatToolbarModule, 
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatExpansionModule
    ], 
})

export class MaterialModule {}