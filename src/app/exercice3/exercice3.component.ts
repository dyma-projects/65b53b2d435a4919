import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrl: './exercice3.component.css',
})
export class Exercice3Component implements OnInit {
  status: boolean = true;
  displayP1!:{};
  displayP2!:{};


  ngOnInit(): void {
    this.changeStatut();
  }

  changeStatut(){
    this.status = !this.status;
    console.log(this.status);
    
    
    this.displayP1 = {
      'display': this.status ? 'block' : 'none',
    }

    this.displayP2 = {
      'display': this.status ? 'none' : 'block',
    }
  }
}
