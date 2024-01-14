import 'dayjs/locale/ko'
import '@assets/styles/globals.scss'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { RouteGuard } from '@features/common/components/RouteGuard'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/router'

dayjs.extend(utc)

// interceptor()

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()
  const { t } = useTranslation()
  // const { isRouteLoading } = useRouteChangeLoader()

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: false,
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        refetchOnReconnect: false,
        onError: (err: any) => {},
      },
      mutations: {
        onError: (err: any) => {
          alert(err.message)
        },
        onMutate: () => {},
        onSettled: () => {},
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RouteGuard>
          <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
            <link rel='icon' href='/favicon.ico' />
            <link rel='shortcut icon' href='/favicon.ico' />
            <title>{t(`common:title`)}</title>
          </Head>
          <Component pageProps={pageProps} />
        </RouteGuard>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
