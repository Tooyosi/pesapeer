import About from "Pages/About";
import Landing from "Pages/Landing";
import Privacy from "Pages/Privacy";
import Terms from "Pages/Terms";

export interface routeInterface {
  path: string
  name: string
  header?: string
  exact?: boolean
  component?: any
  image?:any,
  badgeColor?: any
  badgeText?: any
  icon?:any
  children?: Array<routeInterface>
}

const landingRoutes: routeInterface = {
  path: '/',
  name: 'Landing',
  header: 'Landing',
  children: [
    {
      path: '/',
      name: 'Landing',
      header: 'Landing',
      component: Landing,
    }
  ],
}


const otherPagesRoutes: routeInterface = {
  path: '/',
  name: '',
  header: '',
  children: [
    {
      path: '/privacy',
      name: 'Privacy',
      header: 'Privacy Policy',
      component: Privacy,
    },
    {
      path: '/terms',
      name: 'Terms',
      header: 'Terms and Conditions',
      component: Terms,
    }
  ],
}


const aboutPagesRoutes: routeInterface = {
  path: '/',
  name: '',
  header: '',
  children: [
    {
      path: '/about',
      name: 'About',
      header: 'About',
      component: About,
    }
  ],
}


export const landing: Array<routeInterface> = [landingRoutes]
export const otherPages: Array<routeInterface> = [otherPagesRoutes]
export const aboutPages: Array<routeInterface> = [aboutPagesRoutes]


