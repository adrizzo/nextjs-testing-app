import '../global-styles/globals.scss'

interface appProps {
  Component: React.FunctionComponent,
  pageProps: any
}

function MyApp({ Component, pageProps }: appProps) {
  return <Component {...pageProps} />
}

export default MyApp