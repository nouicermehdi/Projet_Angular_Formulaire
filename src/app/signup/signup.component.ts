import { Component } from '@angular/core';
import { User } from '../shared/classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  user={} as User;
  condition=false;
  

}
