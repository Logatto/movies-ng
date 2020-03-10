import { IUser } from './user';

export class User implements IUser{
  id?: number;
  user: string;
  password?: string;

  constructor(user: IUser){
    this.id = user.id;
    this.user = user.user;
    this.password = user.password;

  }
}
