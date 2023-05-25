export type Quote = {
  id: number,
  quote: string,
  author: string
}

export type Quotes = {
  quotes: Quote[],
  total: number,
  skip: number,
  limit: number
}
