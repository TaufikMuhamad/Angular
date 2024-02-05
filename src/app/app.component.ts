import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoAngularMaterailModule } from './DemoAngularMaterialModule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DemoAngularMaterailModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-turtorial';
}
