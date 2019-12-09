import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-qr-generator';
  public myAngularxQrCode: string = null;

  constructor() {
    // assign a value
    this.myAngularxQrCode = 'Your QR code data string';
  }
}
