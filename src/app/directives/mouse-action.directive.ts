import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appMouseAction]'
})

export class MouseActionDirective {

  public mouseActionText = {
    enter: "Подведите курсор",
    leave: "Уберите курсор"
  }
  div: any;

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
  ) { }

  @Output() pushText = new EventEmitter<any>();
  @Input('getBgColor') getBgColor;

  ngOnInit() {
    this.getText('mouseleave');
  }
  @HostListener('mouseenter', ['$event']) MouseEnter() {
    this._renderer.setStyle(this._element.nativeElement, "background-color", this.getBgColor.hover);
    this._renderer.setStyle(this._element.nativeElement, "color", "#fff");
    this.getText('mouseenter')
    this.div = this._renderer.createElement("div");
    let txt = this._renderer.createText("ADD TEXT");
    this._renderer.appendChild(this.div, txt);
    this._renderer.appendChild(this._element.nativeElement, this.div);
  }

  @HostListener('mouseleave', ['$event']) MouseLeave() {
    this._renderer.setStyle(this._element.nativeElement, "background-color", this.getBgColor.default);
    this._renderer.setStyle(this._element.nativeElement, "color", "#000");
    this.getText('mouseleave')
    this._renderer.removeChild(this._element.nativeElement, this.div);
  }

  getText(action) {
    let text = ''
    switch(action) {
      case 'mouseenter': {
        text = this.mouseActionText.leave;
        break;
      }
      case 'mouseleave': {
        text = this.mouseActionText.enter;
        break;
      }
    }
    this.pushText.emit(text);
  }
}
