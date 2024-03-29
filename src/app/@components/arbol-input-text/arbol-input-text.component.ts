import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit, forwardRef,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'ab-input-text',
  templateUrl: './arbol-input-text.component.html',
  styleUrls: ['./arbol-input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArbolInputTextComponent),
      multi: true
    }
  ]
})
export class ArbolInputTextComponent implements OnInit, ControlValueAccessor {

  @Output() inputTextBlurEvent: EventEmitter<null> = new EventEmitter<null>();

  @Input() required = false;

  @Input() disabled = false;

  @Input() data: string;

  constructor() { }

  ngOnInit(): void {

  }

  onChangeFn = (_: any) => {};

  onTouched: () => void = () => {};

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.data = obj;
  }

  onChange() {
    this.onChangeFn(this.data);
  }

  onBlur(){
    this.inputTextBlurEvent.emit();
  }
}
