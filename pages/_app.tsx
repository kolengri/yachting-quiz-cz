import "../styles/globals.css"
import type { AppProps } from "next/app"
import { SWRConfig } from "swr"
import axios, { AxiosRequestConfig } from "axios"

export const fetcher = (url: string, config: AxiosRequestConfig) =>
  axios({
    url,
    ...config,
  })
    .then((res) => res.data)
    .catch((e) => console.error(e))

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
