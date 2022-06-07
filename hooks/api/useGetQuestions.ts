import useSwr from "swr"
import { Question } from "../../models"

export const useGetQuestions = () => {
  return useSwr<Question[]>("/api/questions")
}
