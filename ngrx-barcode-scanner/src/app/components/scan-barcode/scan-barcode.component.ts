import { Component, OnInit } from '@angular/core';

//barcode
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-scan-barcode',
  templateUrl: './scan-barcode.component.html',
  styleUrls: ['./scan-barcode.component.css']
})
@NgModule({
  declarations: [Demo],
  imports: [
      BrowserModule,
      BarecodeScannerLivestreamModule
  ],
  bootstrap: [Demo]
})
export class ScanBarcodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
