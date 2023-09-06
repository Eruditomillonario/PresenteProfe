import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-mate',
  templateUrl: './mate.page.html',
  styleUrls: ['./mate.page.scss'],
})
export class MatePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  estadoasis(){
    this.router.navigate(['estadoasis']);
  }

}
