import { Component, OnInit, Input } from '@angular/core';

class BtnColor{
  static readonly SUCCESS = 'success';
  static readonly PRIMARY = 'primary';
  static readonly GRAY_LIGHT = 'gray-light';
}

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: []
})
export class BtnComponent implements OnInit {

  @Input() btnType: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' | 'gray-light' = 'primary';
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
      'focus:ring-primary-300': this.color == BtnColor.PRIMARY,
      'bg-gray-200': this.color == BtnColor.GRAY_LIGHT,
      'hover:bg-gray-500': this.color == BtnColor.GRAY_LIGHT,
      'focus:ring-gray-50': this.color == BtnColor.GRAY_LIGHT,
      'text-white': this.color == BtnColor.SUCCESS || this.color == BtnColor.PRIMARY,
      'text-gray-700': this.color == BtnColor.GRAY_LIGHT
    }
  }

}
