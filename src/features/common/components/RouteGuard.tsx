import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// import { LOGIN_PATH, UNAUTH_ROUTES } from '@constants/routes'
// import * as Sentry from '@sentry/react'


function RouteGuard({ children }) {
    const router = useRouter()
    const { asPath } = router
    const [authorized, setAuthorized] = useState(false)



    return children
}

export { RouteGuard }
