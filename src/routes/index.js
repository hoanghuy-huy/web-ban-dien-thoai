// Layout

// Pages
import Home from '~/pages/Home';
import ProductDetail from '~/pages/ProductDetail';
import routesConfig from '~/configs';



//Public Routes
const publicRoutes = [
    { path: routesConfig.home , component: Home },
    { path: routesConfig.productDetail , component: ProductDetail },
    // { path: '/following', component: Following },
    // { path: '/search', component: Search, layout: null },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
