import { LazyExoticComponent} from 'react'
import { ShoppingPage } from '../02-component-pattern/pages/ShoppingPage';



// const lazy1 = lazy(() => import(/* webpackChunkName: "lazyPage1" */'../01-lazyload/pages/LazyPage1'))
// const lazy2 = lazy(() => import(/* webpackChunkName: "lazyPage2" */'../01-lazyload/pages/LazyPage2'))
// const lazy3 = lazy(() => import(/* webpackChunkName: "lazyPage3" */'../01-lazyload/pages/LazyPage3'))





type JSXComponent = () => JSX.Element

interface Route {
    to:string;
    path:string;
    Component : LazyExoticComponent<JSXComponent>  | JSXComponent
    name:string;
}


export const routes:Route[] = [
    {
        to:'/lazy1',
        path: 'lazy1',
        Component: ShoppingPage,
        name:'Shopping '
    },
   
]
