import {NgModule} from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const material = [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatDialogModule, MatIconModule, MatMenuModule, MatTooltipModule, MatSidenavModule, MatListModule];

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule {}
