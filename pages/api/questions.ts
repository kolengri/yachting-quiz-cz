import type { NextApiRequest, NextApiResponse } from "next"
import { Question } from "../../models"
import { getPageMarkup, parseQuestionsMarkup } from "../../parser"
import { QUESTIONS_URL } from "../../config"

export default async function handler(req: NextApiRequest, res: NextApiResponse<Question[]>) {
  const markup = await getPageMarkup(QUESTIONS_URL)
  const questions = parseQuestionsMarkup(markup)

  res.status(200).json(questions)
}
