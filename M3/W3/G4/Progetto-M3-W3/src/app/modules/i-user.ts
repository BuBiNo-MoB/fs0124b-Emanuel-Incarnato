import { IFilm } from "/home/emanuel/Scrivania/fs0124b-Emanuel-Incarnato/M3/W3/G4/Progetto-M3-W3/src/app/modules/i-film"

export interface IUser {
  id: number
  firstname: string
  lastname: string
  age: number
  email: string
  password: string
  favoriteFilms?: IFilm[];
}
