import Landing from "Pages/Landing";

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


export const landing: Array<routeInterface> = [landingRoutes]

