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
    "main",
    null,
    createElement(
        Switch,
        null,
        createElement(
            Route, {
                exact: true,
                path: "/",
                component: createPage('Home')
            }
        ),
        createElement(
            Route, {
                exact: true,
                path: "/about",
                component: createPage('About', { name : 'Abdul Malik Ikhsan'})
            }
        ),
        createElement(
            Route, {
                exact: true,
                path: "/contact",
                component: createPage('Contact')
            }
        ),
        createElement(
            Route, {
                exact: true,
                path: "*",
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
    "div",
    null,
    createElement(Header, null),
    createElement(Main, null)
);

ReactDOM.render(
    createElement(
        BrowserRouter,
        null,
        createElement(App, null)
    ),
    document.getElementById('root')
);

// https://reactjs.org/docs/react-without-jsx.html
// https://www.pluralsight.com/guides/just-plain-react
// https://codepen.io/pshrmn/pen/YZXZqM?editors=1010