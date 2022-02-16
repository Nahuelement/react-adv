import { lazy, LazyExoticComponent} from 'react'
import { ShoppingPage } from '../02-component-pattern/pages/ShoppingPage';
import { userComp } from '../01-lazyload/components/userComp';
import { aboutComp } from '../01-lazyload/components/aboutComp';



// const lazy1 = lazy(() => import(/* webpackChunkName: "lazyPage1" */'../01-lazyload/pages/LazyPage1'))
//const lazy2 = lazy(() => import( '../01-lazyload/pages/LazyPage2'))
//const lazy3 = lazy(() => import(/* webpackChunkName: "lazyPage3" */'../01-lazyload/pages/LazyPage3'))





type JSXComponent = () => JSX.Element

interface Route {
    to:string;
    path:string;
    Component : LazyExoticComponent<JSXComponent>  | JSXComponent
    name:string;
}


export const routes:Route[] = [
    {
        to:'/shopping',
        path: 'shopping',
        Component: ShoppingPage,
        name:'shopping '
    },
    {
        to:'/user',
        path: 'user',
        Component: userComp,
        name:'user '
    },
    {
        to:'/about',
        path: 'about',
        Component: aboutComp,
        name:'about'
    }

]
