import { Component, OnInit, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MasterComponent),
      multi: true
    }
  ]
})

export class MasterComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() {
  }

  onChange: any = () => { }
  onTouch: any = () => { }
  val = "";
  set value(val) {  
    if( val !== undefined && this.val !== null){
      if(!val){
        this.val = "Like";
        //this.val = `<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>`;
      }else{
        this.val = "DisLike";
        //this.val = `<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>`;
      }
      this.onChange(val);
      this.onTouch(val);
    }else{
      this.val = "Like";
      //this.val = `<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>`;
    }
    
  }

  writeValue(value: any): void {
    this.value = value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
}
