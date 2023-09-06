import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'restablecerpass',
    loadChildren: () => import('./pages/restablecerpass/restablecerpass.module').then( m => m.RestablecerpassPageModule)
  },
  {
    path: 'inicioprofe',
    loadChildren: () => import('./pages/inicioprofe/inicioprofe.module').then( m => m.InicioprofePageModule)
  },
  {
    path: 'inicioalumno',
    loadChildren: () => import('./pages/inicioalumno/inicioalumno.module').then( m => m.InicioalumnoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./pages/secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'generarcode',
    loadChildren: () => import('./pages/generarcode/generarcode.module').then( m => m.GenerarcodePageModule)
  },
  {
    path: 'estadoasis',
    loadChildren: () => import('./pages/estadoasis/estadoasis.module').then( m => m.EstadoasisPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'lector',
    loadChildren: () => import('./pages/lector/lector.module').then( m => m.LectorPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'codigopass',
    loadChildren: () => import('./pages/codigopass/codigopass.module').then( m => m.CodigopassPageModule)
  },
  {
    path: 'escaner',
    loadChildren: () => import('./pages/escaner/escaner.module').then( m => m.EscanerPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'seccion1',
    loadChildren: () => import('./pages/seccion1/seccion1.module').then( m => m.Seccion1PageModule)
  },
  {
    path: 'seccion2',
    loadChildren: () => import('./pages/seccion2/seccion2.module').then( m => m.Seccion2PageModule)
  },
  {
    path: 'seccion3',
    loadChildren: () => import('./pages/seccion3/seccion3.module').then( m => m.Seccion3PageModule)
  },
  {
    path: 'bd',
    loadChildren: () => import('./pages/bd/bd.module').then( m => m.BdPageModule)
  },
  {
    path: 'ingles',
    loadChildren: () => import('./pages/ingles/ingles.module').then( m => m.InglesPageModule)
  },
  {
    path: 'mate',
    loadChildren: () => import('./pages/mate/mate.module').then( m => m.MatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
