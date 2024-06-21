// Layout

// Pages
import Home from '~/pages/Home';


//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    // { path: '/following', component: Following },
    // { path: '/search', component: Search, layout: null },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
