export type Data = {
  skills?: {
    frontend: Array<{ title: string }>
    backend: Array<{ title: string }>
    uiux: Array<{ title: string }>
    Other: Array<{ title: string }>
    analytics: Array<{ title: string }>
  }
  frontend: {
    title: string
  }[]
  backend: {
    title: string
  }[]
  uiux: {
    title: string
  }[]
  analytics: {
    title: string
  }[]
  Other: {
    title: string
  }[]
}
