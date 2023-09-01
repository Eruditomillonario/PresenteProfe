import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cargando', url: 'cargando', icon: 'sync' },
    { title: 'Login', url: 'login', icon: 'finger-print' },
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Inicio Profe', url: 'inicioprofe', icon: 'person-circle' },
    { title: 'Inicio Alumno', url: 'inicioalumno', icon: 'people-circle' },
    { title: 'Restablecer', url: 'restablecerpass', icon: 'key' },
    { title: 'Secciones', url: 'secciones', icon: 'list' },
    { title: 'Generar QR', url: 'generarcode', icon: 'qr-code' },
    { title: 'Lista', url: 'lista', icon: 'clipboard' },
    { title: 'Todas las Asignaturas', url: 'asignaturas', icon: 'library' },
    { title: 'Lector QR', url: 'lector', icon: 'scan' },
    { title: 'Estado Asistencia', url: 'estadoasis', icon: 'id-card' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
