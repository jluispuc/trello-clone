import { Component, OnInit, Input } from '@angular/core';

class BtnColor{
  static readonly SUCCESS = 'success';
  static readonly PRIMARY = 'primary';
}

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: []
})
export class BtnComponent implements OnInit {

  @Input() btnType: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' = 'primary';
  constructor() { }

  ngOnInit() {
  }

  get colors(){
    return {
      'bg-success-700': this.color == BtnColor.SUCCESS,
      'hover:bg-success-800': this.color == BtnColor.SUCCESS,
      'focus:ring-success-300': this.color == BtnColor.SUCCESS,
      'bg-primary-700': this.color == BtnColor.PRIMARY,
      'hover:bg-primary-800': this.color == BtnColor.PRIMARY,
      'focus:ring-primary-300': this.color == BtnColor.PRIMARY
    }
  }

}
