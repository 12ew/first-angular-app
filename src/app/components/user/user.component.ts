import { Component, OnInit } from '@angular/core';

import { User } from "../../models/User";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // template: '<h2> John Doe</h2>'
    
    // === STYLES CAN BE DIRECTLY ADDED IN HERE === //
    // styles: [`
    // h2 {
    //     color: blue;
    // }`]
})

export class UserComponent implements OnInit { 
    user: User
     constructor () {
    }

    ngOnInit() {
         this.user = {
             firstName: 'John',
             lastName: 'Doe',
             email: 'jd@email.com',
         }
    }
}

