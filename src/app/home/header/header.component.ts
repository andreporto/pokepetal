import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { PokeMode } from 'src/app/model/Pokemon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() modeChange = new EventEmitter();

  isPokedex = true;

  constructor() { }

  setMode(newMode: boolean) {
    if(newMode == !this.isPokedex){
      this.isPokedex = newMode;
      this.modeChange.emit(newMode);
    }
  }

}
