const {
    Link
} = ReactRouterDOM

class Navigation extends React.Component {
    render() {
      return React.createElement(
            'nav',
            {
                className : "navbar navbar-expand-sm navbar-dark bg-dark fixed-top",
                role: "navigation"
            },
            React.createElement(
                'div',
                {
                    className: "container"
                },
                React.createElement(
                    'div',
                    {
                        className: "navbar-header"
                    },
                    React.createElement(
                        'button',
                        {
                            className: "navbar-toggler",
                            "data-toggle": "collapse",
                            "data-target": "#navbarCollapse",
                            "aria-controls": "#navbarCollapse",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        },
                        React.createElement(
                            'span',
                            {
                                className: "navbar-toggler-icon"
                            }
                        )
                    ),
                    React.createElement(
                        Link,
                        {
                            to: "/",
                            className: "navbar-brand",
                        },
                        React.createElement(
                            'img',
                            {
                                src: "https://docs.laminas.dev/img/laminas-mezzio-rgb.svg",
                                alt: "Laminas Mezzio",
                                height: 56
                            }
                        )
                    )
                ),
                React.createElement(
                    'div',
                    {
                        className: "collapse navbar-collapse",
                        id: "navbarCollapse"
                    },
                    React.createElement(
                        "ul",
                        {
                            className: "navbar-nav mr-auto"
                        },
                        React.createElement(
                            "li",
                            {
                                className: "nav-item"
                            },
                            React.createElement(Link, { className: 'nav-link', to: "/"}, "Home")
                        ),
                        React.createElement(
                            "li",
                            {
                                className: "nav-item"
                            },
                            React.createElement(Link, { className: 'nav-link', to: "/about"}, "About")
                        ),
                        React.createElement(
                            "li",
                            {
                                className: "nav-item"
                            },
                            React.createElement(Link, { className: 'nav-link', to: "/contact"}, "Contact")
                        )
                    )
                )
            )
        );
    }
}

export default Navigation;