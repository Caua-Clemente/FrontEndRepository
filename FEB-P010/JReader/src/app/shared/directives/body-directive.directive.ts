import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBodyDirective]'
})
export class BodyDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2)
  { 
    this.renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(el.nativeElement, 'height', '40px');
    this.renderer.setStyle(el.nativeElement, 'width', '200px');

    this.renderer.setStyle(el.nativeElement, 'border-radius', '20px');
    this.renderer.setStyle(el.nativeElement, 'margin-top', '10px');
    this.renderer.setStyle(el.nativeElement, 'background-color', 'rgb(75, 133, 172)');

    this.renderer.setStyle(el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(el.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(el.nativeElement, 'justify-content', 'center');
  }
}
