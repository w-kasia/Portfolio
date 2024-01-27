import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const material = [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule];

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule {}
