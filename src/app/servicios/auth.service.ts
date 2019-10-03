import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logeado: any = false;

  constructor(public afAuth: AngularFireAuth) 
  {
    afAuth.authState.subscribe(user=>(this.logeado = user))
  }

  RegistrarUsuario(email:string, contraseña: string)
  {
    return new Promise((resolve, reject)=>
    {
      this.afAuth.auth.createUserWithEmailAndPassword(email, contraseña).then( userData => resolve(userData),
      error => reject(error));
    });
  }

  LoginUsuario(email: string, contraseña: string)
  {
   
    return new Promise((resolve, reject)=>
    {
      this.afAuth.auth.signInWithEmailAndPassword(email, contraseña).then( userData => resolve(userData),
      error => reject(error));
    });
  }

  LogoutUsuario()
  {
    return this.afAuth.auth.signOut();
  }

  isAuth() 
  {
    return this.afAuth.authState.pipe(map(auth => auth));
  }


}
