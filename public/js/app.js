import createPage from './create-page.js';
import Navigation from './Navigation.js';

const {
  BrowserRouter,
  Switch,
  Route
} = ReactRouterDOM;

const {
  createElement
} = React;

const Main = () => createElement(
  'main',
  null,
  createElement(
    Switch,
    null,
    createElement(
      Route, {
        exact: true,
        path: '/',
        component: createPage('home', 'Home')
      }
    ),
    createElement(
      Route, {
        exact: true,
        path: '/about',
        component: createPage('about', 'About', {name: 'Abdul Malik Ikhsan'})
      }
    ),
    createElement(
      Route, {
        exact: true,
        path: '/contact',
        component: createPage('contact', 'Contact')
      }
    ),
    createElement(
      Route, {
        exact: true,
        path: '*',
        component: createPage('404 Page')
      }
    )
  )
);

const Header = () => createElement(
  'header',
  {
    className: 'app-header'
  },
  createElement(Navigation)
);

const App = () => createElement(
  'div',
  null,
  createElement(Header, null),
  createElement(Main, null)
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  createElement(
    BrowserRouter,
    null,
    createElement(App, null)
  )
);

// https://reactjs.org/docs/react-without-jsx.html
// https://www.pluralsight.com/guides/just-plain-react
// https://codepen.io/pshrmn/pen/YZXZqM?editors=1010
// https://stackoverflow.com/questions/53527465/how-can-i-do-string-interpolation-in-a-string-variable-in-react
