import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgcRed]'
})
export class BgcRedDirective implements OnInit {

 
  constructor( 
    private _element: ElementRef,
    private _renderer: Renderer2,
  ) { }
  
  ngOnInit() {
    console.dir(this._element);
    const {nativeElement} = this._element;
    // this._element.nativeElement.style.color = 'red';
    // this._element.nativeElement.style.fontSize = '20px';
    this._renderer.setStyle(nativeElement, "background-color", "red");
  }

}
