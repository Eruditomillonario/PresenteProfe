import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seccion2',
  templateUrl: './seccion2.page.html',
  styleUrls: ['./seccion2.page.scss'],
})
export class Seccion2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  generarcode(){
    this.router.navigate(['generarcode']);
  } 
}
