import Navigation from './Navigation.js';
import createPage from './create-page.js';

const {
    HashRouter,
    Switch,
    Route
} = ReactRouterDOM;

const Main = () => React.createElement(
    "main",
    null,
    React.createElement(
        Switch,
        null,
        React.createElement(
            Route, {
                exact: true,
                path: "/",
                component: createPage('/', 'Home')
            }
        ),
        React.createElement(
            Route, {
                exact: true,
                path: "/about",
                component: createPage('/about', 'About')
            }
        ),
        React.createElement(
            Route, {
                exact: true,
                path: "/contact",
                component: createPage('/contact', 'Contact')
            }
        ),
        React.createElement(
            Route, {
                exact: true,
                path: "*",
                component: createPage('*', '404 Page')
            }
        )
    )
);

const Header = () => React.createElement(
    'header',
    {
        className: 'app-header'
    },
    React.createElement(Navigation)
);

const App = () => React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Main, null)
);

ReactDOM.render(
    React.createElement(
        HashRouter,
        null,
        React.createElement(App, null)
    ),
    document.getElementById('root')
);

// https://reactjs.org/docs/react-without-jsx.html
// https://www.pluralsight.com/guides/just-plain-react
// https://codepen.io/pshrmn/pen/YZXZqM?editors=1010