import { Component } from '@angular/core';
import { User } from '../shared/classes/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user={}as User;

}
