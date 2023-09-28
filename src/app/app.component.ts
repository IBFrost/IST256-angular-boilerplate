import { Component } from '@angular/core';
import { callScripts } from '../app/scripts.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  ngOnInit(): void {
    callScripts();
  }
}
