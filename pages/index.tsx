import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Main, Container } from "../components"
import { useGetQuestions } from "../hooks/api"

const title = "Test: otázky pro způsobilost"

const Home: NextPage = () => {
  const { data } = useGetQuestions()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Main>
        <Container>
          <h1>{title}</h1>
          <div>{JSON.stringify(data)}</div>
        </Container>
      </Main>
    </>
  )
}

export default Home
