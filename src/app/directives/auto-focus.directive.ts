import { Directive, ElementRef, Renderer2, OnInit, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements OnInit, AfterContentInit {

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
  ) { }

  ngOnInit() {
    
  }

  ngAfterContentInit() {
    const { nativeElement } = this._element;
    this._renderer.selectRootElement(nativeElement).focus();
  }

}
