import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {


  constructor(private router:Router)
  {

  }
  
  navigateToAdmin()
  {
   
    this.router.navigate(['/admin'])

  }

}
