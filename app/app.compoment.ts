import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{title}}</h1>
  <img [src]="image"/>
  <my-tutorial></my-tutorial>
  <input type="text" [value]="text" />
  `,
  styles:['h4 {color:blue;}']
})
export class AppComponent { 
  public title = "TUAN"
  public image ="http://lorempicel.com/300/300";
  public text ="Đỗ Anh Tuấn";
}