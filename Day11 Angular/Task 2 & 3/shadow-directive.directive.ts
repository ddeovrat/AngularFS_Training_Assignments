import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appShadowDirective]'
})
export class ShadowDirectiveDirective {
  @Input()
  appShadowDirective:string="";

  constructor(private _elementRef: ElementRef) { }
  ngOnInit()
  {
    if(this.appShadowDirective=="")
    {
      this.appShadowDirective="red";
    }
    this._elementRef.nativeElement.style.color = this.appShadowDirective;
  }

}
