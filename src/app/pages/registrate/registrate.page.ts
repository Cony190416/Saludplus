import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Para mostrar alertas
import { UsuarioService } from '../../services/usuario.service'; // Importación del servicio

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.page.html',
  styleUrls: ['./registrate.page.scss'],
})
export class RegistratePage {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private alertController: AlertController // Para las alertas
  ) {}

  // Método para validar formulario
  private isValidForm(): boolean {
    const { username, email, password } = this.user;
    if (!username.trim()) {
      this.mostrarAlerta('Error', 'El nombre de usuario es obligatorio.');
      return false;
    }
    if (!email.trim() || !this.isValidEmail(email)) {
      this.mostrarAlerta('Error', 'Por favor, introduce un correo válido.');
      return false;
    }
    if (password.length < 6) {
      this.mostrarAlerta('Error', 'La contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    return true;
  }

  // Método para mostrar alertas
  private async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Validación del formato del correo
  private isValidEmail(email: string): boolean {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  // Método principal para registrar al usuario
  onSubmit() {
    if (!this.isValidForm()) return;

    this.usuarioService.register(this.user).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        this.mostrarAlerta('Éxito', 'Registro exitoso. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        this.mostrarAlerta('Error', 'Hubo un problema al registrar el usuario. Inténtalo de nuevo.');
      }
    );
  }
}
