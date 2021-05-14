import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('routerChange') routerChange  = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(route: string){
    this.routerChange.emit(route);
  }

}
