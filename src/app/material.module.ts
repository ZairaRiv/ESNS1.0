import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatDialogModule, 
	MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, 
	MatExpansionModule, MatCardModule  } from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule, 
        MatToolbarModule, 
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
		MatExpansionModule,
		MatCardModule
    ], 
    exports: [
        MatButtonModule, 
        MatToolbarModule, 
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
		MatExpansionModule,
		MatCardModule
    ], 
})

export class MaterialModule {}