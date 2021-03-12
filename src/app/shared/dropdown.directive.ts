import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core'

@Directive({
    selector: '[appDropdownCustomDirective]'
})
export class DropDownDirective implements OnInit{ // shoudl allow to add a certain CSS class to the element it sits on upon a CLICK and then revert back on another click.. a class toggle. 
    @Input() defaultClass: string = ""
    constructor() {
    }
    ngOnInit() {
        this.ourClass = this.defaultClass
    }
    @HostBinding('class') ourClass: string = this.defaultClass;

    @HostListener('click') toggle(){
        this.ourClass==='' ? this.ourClass="open" : this.ourClass=""
    }
    // @Input() defaultClass: string = "btn-group"
    // constructor() {
    // }
    // ngOnInit() {
    //     this.ourClass = this.defaultClass
    // }
    // @HostBinding('class') ourClass: string = this.defaultClass;

    // @HostListener('click') toggle(){
    //     this.ourClass==='btn-group' ? this.ourClass="btn-group open" : this.ourClass="btn-group"
    // }


}