import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBgcRed]'
})
export class BgcRedDirective implements OnInit {

 
  constructor( 
    private _element: ElementRef,
    private _renderer: Renderer2,
  ) { }
  
  @Input() params;


  ngOnInit() {
    if (!this.params) {
      this.params = {
        'background-color': 'red',
        'color': '#fff',
        'font-size': '20px'
      }
    }
    console.dir(this._element);
    const {nativeElement} = this._element;
    // this._element.nativeElement.style.color = 'red';
    // this._element.nativeElement.style.fontSize = '20px';
    // this._renderer.setStyle(nativeElement, "background-color", "red");
    // this._renderer.setStyle(nativeElement, "color", "#fff");
    for (let key in this.params) {
      this._renderer.setStyle(nativeElement, key, this.params[key]);
    }
  }

}
