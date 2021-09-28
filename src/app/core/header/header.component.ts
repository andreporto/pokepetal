import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { PokeMode } from 'src/app/model/Pokemon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() numPokemons = 0;
  @Output() modeChange = new EventEmitter();
  @Output() pageChange = new EventEmitter();

  isPokedex = true;

  constructor() { }

  setMode(newMode: boolean) {
    if(newMode == !this.isPokedex){
      this.isPokedex = newMode;
      this.modeChange.emit(newMode);
    }
  }

  onPageChange(e: any){
    this.pageChange.emit(e);
  }

}
