export interface iArticle {
  id: number
  title: string
  body: string
  reactions: number
  tags: Array<string>
  active: boolean
}
