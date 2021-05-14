import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookbook';
  selectedRoute: string = "recipe"

  onRouteChanged(route: string){
    this.selectedRoute = route;
  }
}
