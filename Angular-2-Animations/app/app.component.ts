import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Angular Animations</h1>
             <button (click)="toggleLights()">ToggleLights</button>
             <button (click)="toggleDisplay()">ToggleDisplay</button>
             <div class="box" [@light]="state" [@display]="displayState" >
             </div>
             <div *ngIf="showDiv" [@flyInOut] >
              Enter/Exit hi
             </div>
  
  
  `,
  animations: [
    trigger('light', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on',   style({
        backgroundColor: '#eee'
      })),
      transition('off => on', animate('2000ms 1s ease-in', style({transform: 'rotate(90deg)'}))),
      transition('on => off', animate('2000ms 1s ease-out', style({transform: 'rotate(180deg)'})))
    ]),
    trigger('display', [
      state('hide', style({
        opacity: 0
      })),
      state('show',   style({
        opacity: 1        
      })),
      transition('hide => show', animate('2000ms ease-in', style({ opacity: 0.5}))),
      transition('show => hide', animate('2000ms ease-in', style({transform: 'scale(0.5)', opacity: 0.5})))
    ]),
     trigger('flyInOut', [
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(2000)
    ]),
    transition('* => void', [
      animate(2000, style({transform: 'translateX(100%)'}))
    ])
  ])
  ]
})
export class AppComponent { 
  state: string = 'off';
  displayState: string = 'show';
  showDiv: boolean = true;
  
  toggleLights(){
    this.state = (this.state == "off") ? "on" : "off";
  }
  toggleDisplay(){
    this.displayState = (this.displayState == "hide") ? "show" : "hide";
    this.showDiv = this.showDiv? false : true;
  }
}
