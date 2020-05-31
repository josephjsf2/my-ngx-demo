import { Component, OnInit, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const MY_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MyControlComponent),
  multi: true
};

@Component({
  selector: 'app-my-control',
  templateUrl: './my-control.component.html',
  styleUrls: ['./my-control.component.css'],
  providers: [MY_CONTROL_VALUE_ACCESSOR]
})
export class MyControlComponent implements OnInit, ControlValueAccessor {

  protected _page = 1;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  set page(value: number) {
    const _previous = this._page;
    this._page = value || 1;

    if (_previous === this._page || typeof _previous === 'undefined') {
      return;
    }

    this.pageChanged.emit(this._page);
  }

  get page(): number {
    return this._page;
  }

  writeValue(value: any): void {
    this.page = value;
  }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

  increasePage() {
    this.page = this.page + 1;
  }
}
