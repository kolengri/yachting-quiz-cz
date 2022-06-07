import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useGetQuestions } from "../hooks/api"

const Home: NextPage = () => {
  const { data } = useGetQuestions()

  return <div>{JSON.stringify(data)}</div>
}

export default Home
