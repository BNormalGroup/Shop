export interface IUserRegister {
  firstName: string;
  email: string;
  isAdmin: boolean;
  isBanned: boolean;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
