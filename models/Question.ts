export type Question = {
  article: number
  title: string
  variants: {
    title: string
    isCorrect: boolean
  }[]
}
