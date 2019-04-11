import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  app: string;
  isLike: boolean = false;
  ClickMe() {
    this.isLike = !this.isLike;
    this.isLike ? this.app = "Like" : this.app = "DisLike";
  }
}
