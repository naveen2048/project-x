import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[imgDirective]',
  })
export class ImgDirective {
    @Input() imgDirective:string;
  
    constructor(private element:ElementRef){
      element.nativeElement.src = '../../assets/images/loading.gif';
    } 
  
    @HostListener('load', ['$event'])
    onLoad() {
      this.element.nativeElement.src = this.imgDirective;
    }
  }