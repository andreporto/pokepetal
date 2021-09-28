import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() length = 0;
  @Output() pageChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  page(e: any){
    this.pageChange.emit(e);
  }

}
