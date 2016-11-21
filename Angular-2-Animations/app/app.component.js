"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.state = 'off';
        this.displayState = 'show';
        this.showDiv = true;
    }
    AppComponent.prototype.toggleLights = function () {
        this.state = (this.state == "off") ? "on" : "off";
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.displayState = (this.displayState == "hide") ? "show" : "hide";
        this.showDiv = this.showDiv ? false : true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Angular Animations</h1>\n             <button (click)=\"toggleLights()\">ToggleLights</button>\n             <button (click)=\"toggleDisplay()\">ToggleDisplay</button>\n             <div class=\"box\" [@light]=\"state\" [@display]=\"displayState\" >\n             </div>\n             <div *ngIf=\"showDiv\" [@flyInOut] >\n              Enter/Exit hi\n             </div>\n  \n  \n  ",
            animations: [
                core_1.trigger('light', [
                    core_1.state('off', core_1.style({
                        backgroundColor: 'black'
                    })),
                    core_1.state('on', core_1.style({
                        backgroundColor: '#eee'
                    })),
                    core_1.transition('off => on', core_1.animate('2000ms 1s ease-in', core_1.style({ transform: 'rotate(90deg)' }))),
                    core_1.transition('on => off', core_1.animate('2000ms 1s ease-out', core_1.style({ transform: 'rotate(180deg)' })))
                ]),
                core_1.trigger('display', [
                    core_1.state('hide', core_1.style({
                        opacity: 0
                    })),
                    core_1.state('show', core_1.style({
                        opacity: 1
                    })),
                    core_1.transition('hide => show', core_1.animate('2000ms ease-in', core_1.style({ opacity: 0.5 }))),
                    core_1.transition('show => hide', core_1.animate('2000ms ease-in', core_1.style({ transform: 'scale(0.5)', opacity: 0.5 })))
                ]),
                core_1.trigger('flyInOut', [
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-100%)' }),
                        core_1.animate(2000)
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(2000, core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map