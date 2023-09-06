import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seccion3',
  templateUrl: './seccion3.page.html',
  styleUrls: ['./seccion3.page.scss'],
})
export class Seccion3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  generarcode(){
    this.router.navigate(['generarcode']);
  } 
}
