// The page reads its address from the browser (core's useLocation); a static export needs one placeholder.
export const generateStaticParams = () => [{ slug: ['_'] }]

export { default } from './view'
