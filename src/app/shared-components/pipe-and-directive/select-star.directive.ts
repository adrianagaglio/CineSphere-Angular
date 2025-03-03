import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectStar]',
})
export class SelectStarDirective {
  constructor(private ref: ElementRef) {}

  ngOnInit() {}

  @HostListener('click') onClick() {
    console.log(this.ref.nativeElement.attributes[1].value);
    this.ref.nativeElement.attributes[1].value = 'bootstrapStarFill';
    console.log(this.ref.nativeElement.attributes[1].value);
  }
}
