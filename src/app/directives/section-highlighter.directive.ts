import { Directive, Input, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[activeSection]"
})
export class HighLightDirective {
  constructor(private eleRef: ElementRef, private renderer:Renderer2) {}

    // @HostListener("mouseenter")
    // onMouseEnter() {
    //   this.renderer.addClass(this.eleRef.nativeElement, 'CategoryBlock');
    // }

    // @HostListener("mouseleave")
    // onMouseLeave() {
    //     this.renderer.removeClass(this.eleRef.nativeElement, 'CategoryBlock');
    // }
}
