import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private snake:MatSnackBar) {}


  btnClick(){
    
    this.snake.open("Hey Welcome to app","Cancel",{
      duration: 2000
    });
  }

}
