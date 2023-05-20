import { Role } from "./role";

export class Login {
  id: number;
  name: string;
  imageUrl: string
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: Role;
  token?: string;
}
