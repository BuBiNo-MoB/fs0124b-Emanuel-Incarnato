import { iUsers } from "./users";

export interface iList {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  user?: iUsers
}
