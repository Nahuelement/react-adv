import { lazy ,LazyExoticComponent} from 'react'
import NoLazyload from '../01-lazyload/pages/NoLazyLoad';




const Lazylayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))



type JSXComponent = () => JSX.Element

interface Route {
    to:string;
    path:string;
    Component : LazyExoticComponent<JSXComponent>  | JSXComponent
    name:string;
}


export const routes:Route[] = [
    {
        to:'/Lazylayout/',
        path: '/Lazylayout/*',
        Component: Lazylayout,
        name:'Lazylayout'
    },
    {
        to:'/no-lazy',
        path: 'no-lazy',
        Component: NoLazyload,
        name:'No lazy'
    }
    
]
