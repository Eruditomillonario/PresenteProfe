import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecerpass',
  templateUrl: './restablecerpass.page.html',
  styleUrls: ['./restablecerpass.page.scss'],
})
export class RestablecerpassPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  codigopass(){
    this.router.navigate(['codigopass']);
  }
}
