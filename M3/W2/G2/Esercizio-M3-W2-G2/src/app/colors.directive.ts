import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColoraTags]'
})
export class ColoraTagsDirective implements OnInit {
  @Input() colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const tags = this.el.nativeElement.querySelectorAll('.badge');
    tags.forEach((tag: HTMLElement) => {
      const randomColor = Math.floor(Math.random() * this.colors.length);
      tag.style.backgroundColor = this.colors[randomColor];
    });
  }
}
