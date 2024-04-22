export interface IUserRegister {
  firstName: string;
  email: string;
  isAdmin: boolean;
  isBanned: boolean;
  password: string;
}

export interface IUserLogin {
  id: number;
  email: string;
  isAdmin: boolean;
  isBanned: boolean;
  password: string;
}

export interface IUserAuth {
  email: string;
  isAdmin: boolean;
  firstName: string;
  lastName: string;
  birthday: string;
}
