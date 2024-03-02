import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextTitleDirective]'
})
export class TextTitleDirectiveDirective {

    constructor(private el: ElementRef, private renderer: Renderer2)
    { 
      this.renderer.setStyle(el.nativeElement, 'font-weight', 'bold');
    }
}
