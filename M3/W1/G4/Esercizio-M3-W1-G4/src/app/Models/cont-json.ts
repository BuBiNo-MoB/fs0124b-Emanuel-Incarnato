import { iArticle } from "./article"

export interface iJson {
  posts: iArticle[]
  total: number
  skip: number
  limit: number
}
