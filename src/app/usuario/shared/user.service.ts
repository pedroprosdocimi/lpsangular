import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private db: AngularFireDatabase) { }
 
  insert(user: User) {
    this.db.list('user').push(user)
      .then((result: any) => {
        console.log(result.key);
      });
  }
 
  update(user: User, key: string) {
    this.db.list('user').update(key, user)
      .catch((error: any) => {
        console.error(error);
      });
  }

  validade(matricula: string, senha: string, key: string){
    var list = this.db.list('user')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
    console.log(list);
    for(var objeto in list){
      //objeto.
    }
  }
}