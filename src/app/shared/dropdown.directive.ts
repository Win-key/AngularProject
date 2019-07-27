import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs : 'appDropdown'
})
export class DropdownDirective {

  @HostBinding('class.show') isShow : boolean;

  @HostListener('click') toggle(){
    this.isShow = !this.isShow;
  }

  constructor() { 
    this.isShow = false;
  }

}
