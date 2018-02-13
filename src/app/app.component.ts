import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  @ViewChild('input') input: ElementRef
  constructor(){
    
  }

 ngAfterViewInit(){
  let input$ = Observable.fromEvent(this.input.nativeElement, 'input')
  .subscribe(res => console.log(res));
 }
 
  
}
