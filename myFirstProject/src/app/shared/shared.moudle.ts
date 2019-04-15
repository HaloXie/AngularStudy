import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonPrettyPrintPipe } from './pipes/json/json-pretty-print.pipe';

const modules = [CommonModule, FormsModule];

const components = [JsonPrettyPrintPipe];

const exported = [...components, FormsModule, CommonModule];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported
})
export class SharedModule {}
