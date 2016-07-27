import { Component, OnInit } from '@angular/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic/ng-semantic';

@Component({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    moduleId: module.id,
    selector: 'av-app',
    templateUrl: 'app/app.component.html',
})

export class AppComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
};
