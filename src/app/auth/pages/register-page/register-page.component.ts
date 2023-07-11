import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  public register(): void {
    const { email, name, password } = this.myForm.value;
    this.authService.register(email, name, password).subscribe({
      next: () =>
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Se ha registrado con exito el usuario ${name}`,
          showConfirmButton: false,
          timer: 1500,
        }),
    });
  }
}
