import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion1',
  templateUrl: './seccion1.page.html',
  styleUrls: ['./seccion1.page.scss'],
})
export class Seccion1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  generarcode(){
    this.router.navigate(['generarcode']);
  } 

}
