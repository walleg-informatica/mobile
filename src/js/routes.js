
import HomePage from '../pages/home.jsx';
import LoginPage from '../pages/login.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import PedidosPage from '../pages/pedidos.jsx';
import PagamentosPage from '../pages/pagamentos.jsx';
import ChecarProdutoPage from '../pages/checarProduto.jsx'
import AlterarPedidoPage from '../pages/alterar-pedido.jsx'
import EntradaNfePage from '../pages/entrada-nfe.jsx'
import ChecarPedidoPage from '../pages/pedido.jsx'

import LeftPage1 from '../pages/left-page-1.jsx';
import LeftPage2 from '../pages/left-page-2.jsx';
import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';
import ProdutoDescricao from '../pages/produto-descricao.jsx';

var routes = [
  {
    path: '/',
    component: LoginPage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/pedidos/',
    component: PedidosPage
  },
  {
    path: '/pagamentos/',
    component: PagamentosPage
  },
  {
    path: '/checar-produto/',
    component: ChecarProdutoPage
  },
  {
    path: '/produto-descricao/',
    component: ProdutoDescricao
  },
  {
    path: '/alterar-pedido/',
    component: AlterarPedidoPage
  },
  {
    path: '/pedido/',
    component: ChecarPedidoPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/entrada-nfe/',
    component: EntradaNfePage
  },
  {
    path: '/left-page-1/',
    component: LeftPage1
  },
  {
    path: '/left-page-2/',
    component: LeftPage2
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

// routes.forEach((r) => r['options'] = {
//   transition: 'f7-push'
// })
export default routes;
