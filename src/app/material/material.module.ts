import {NgModule} from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

const material = [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatDialogModule, MatIconModule, MatMenuModule];

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule {}
