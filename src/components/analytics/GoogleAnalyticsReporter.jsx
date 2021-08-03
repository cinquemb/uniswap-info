import { useEffect } from 'react'

// fires a GA pageview every time the route changes
export default function GoogleAnalyticsReporter({ location: { pathname, search } }) {
  useEffect(() => {
    console.log(true);
  }, [pathname, search])
  return null
}
