import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
constructor(private router:Router)
{
  
}

  navigate_button(){
    this.router.navigate(['data-binding'])  

  }

  admin:[
    {id:1
    },
    {
      id:2
    }
  ] | undefined
}
