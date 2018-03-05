import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatDialogModule,
	MatIconModule, MatSidenavModule, MatListModule, MatMenuModule,
	MatExpansionModule, MatCardModule, MatGridListModule  } from '@angular/material';


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
        MatCardModule,
        MatGridListModule
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
        MatCardModule,
        MatGridListModule
    ],
})

export class MaterialModule {}