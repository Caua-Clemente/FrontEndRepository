import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextContentDirective]'
})
export class TextContentDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2)
  { 
    this.renderer.setStyle(el.nativeElement, 'font-size', 'large');
    this.renderer.setStyle(el.nativeElement, 'font-weight', 'bold');
    this.renderer.setStyle(el.nativeElement, 'color', 'rgb(255, 255, 255');
  }

}
