import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-codigopass',
  templateUrl: './codigopass.page.html',
  styleUrls: ['./codigopass.page.scss'],
})
export class CodigopassPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  codigopass(){
    this.router.navigate(['codigopass']);
  }
}
