import { Component, OnInit, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Directive({
  selector: '[appRed]',
})

export class RedDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = "#e35e6b"
  }
}