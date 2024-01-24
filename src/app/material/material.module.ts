import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 

const material = [MatFormFieldModule, MatInputModule, MatButtonModule];

@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule {}
