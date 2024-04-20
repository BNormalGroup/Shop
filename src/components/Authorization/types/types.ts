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
