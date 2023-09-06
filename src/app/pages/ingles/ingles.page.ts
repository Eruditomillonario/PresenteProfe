import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.page.html',
  styleUrls: ['./ingles.page.scss'],
})
export class InglesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  estadoasis(){
    this.router.navigate(['estadoasis']);
  }
}
