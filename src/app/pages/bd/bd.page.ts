import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-bd',
  templateUrl: './bd.page.html',
  styleUrls: ['./bd.page.scss'],
})
export class BdPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  estadoasis(){
    this.router.navigate(['estadoasis']);
  }

}
