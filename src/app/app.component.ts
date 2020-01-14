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

  qrcodename: string;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';
  value: string;
  display = false;
  href: string;

  generateQRCode() {
    if (this.qrcodename === '') {
      this.display = false;
      alert('Please enter the name');
      return;
    } else {
      this.value = this.qrcodename;
      this.display = true;
    }
  }

  downloadImage() {
    this.href = document.getElementsByTagName('img')[0].src;
  }

}
