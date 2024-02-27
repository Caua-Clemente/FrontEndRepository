import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleDirective]'
})
export class TitleDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2)
  {
    this.renderer.setStyle(el.nativeElement, 'height', '50px');
    this.renderer.setStyle(el.nativeElement, 'border-radius', '20px');
    this.renderer.setStyle(el.nativeElement, 'margin-top', '10px');
    this.renderer.setStyle(el.nativeElement, 'background-color', 'rgb(230, 116, 116)');

    this.renderer.setStyle(el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(el.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(el.nativeElement, 'justify-content', 'center');
  }
}
