import createPage from './create-page.js';
import Navigation from './Navigation.js';

const {
  BrowserRouter,
  Routes,
  Route
} = ReactRouterDOM;

const {
  createElement
} = React;

const Main = () => createElement(
  'main',
  null,
  createElement(
    Routes,
    null,
    createElement(
      Route, {
        path: '/',
        element: createElement(createPage('home', 'Home'))
      }
    ),
    createElement(
      Route, {
        path: '/about',
        element: createElement(createPage('about', 'About', {name: 'Abdul Malik Ikhsan'}))
      }
    ),
    createElement(
      Route, {
        path: '/contact',
        element: createElement(createPage('contact', 'Contact'))
      }
    ),
    createElement(
      Route, {
        path: '*',
        element: createElement(createPage('404 Page'))
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
