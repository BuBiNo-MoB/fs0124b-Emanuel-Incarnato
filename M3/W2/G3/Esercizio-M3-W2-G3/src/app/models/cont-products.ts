import { iProducts } from './products';

export interface iContProducts {
  products:iProducts[]
  total: number
  skip: number
  limit: number
}
