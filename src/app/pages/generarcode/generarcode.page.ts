import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular/providers/toast-controller';
import { Router } from '@angular/router';


@Component({
  selector: 'app-generarcode',
  templateUrl: './generarcode.page.html',
  styleUrls: ['./generarcode.page.scss'],
})
export class GenerarcodePage implements OnInit {

  // codigoqr!: codigoqr;
  constructor(private router: Router) { }
  // constructor(private toastController:ToastController, private activateRoute: activatedRoute) { }

   ngOnInit() {
    // this.activateRoute.paramMap.subscribe(param => {
    //   const aux = param.get('id')
    //   if(aux){
    //     this.codigoqr = this.codigoqr.getCodigo(aux)
    //   }
    // })
  }

  // async mensajeToast(mensaje: string){
  //   const toast = await this.toastController.create({
  //     message: mensaje,
  //     duration: 200,
  //     position: 'bottom'
  //   })
  //   toast.present()
  // }
  lista(){
    this.router.navigate(['lista']);
  }

}
