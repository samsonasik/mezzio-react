const {
    Link
} = ReactRouterDOM;

const {
    Component,
    createElement
} = React;

class Navigation extends Component {
    render() {
      return createElement(
            'nav',
            {
                className : "navbar navbar-expand-sm navbar-dark bg-dark fixed-top",
                role: "navigation"
            },
            createElement(
                'div',
                {
                    className: "container"
                },
                createElement(
                    'div',
                    {
                        className: "navbar-header"
                    },
                    createElement(
                        'button',
                        {
                            className: "navbar-toggler",
                            "data-toggle": "collapse",
                            "data-target": "#navbarCollapse",
                            "aria-controls": "#navbarCollapse",
                            "aria-expanded": "false",
                            "aria-label": "Toggle navigation"
                        },
                        createElement(
                            'span',
                            {
                                className: "navbar-toggler-icon"
                            }
                        )
                    ),
                    createElement(
                        Link,
                        {
                            to: "/",
                            className: "navbar-brand",
                        },
                        createElement(
                            'img',
                            {
                                src: "https://docs.laminas.dev/img/laminas-mezzio-rgb.svg",
                                alt: "Laminas Mezzio",
                                height: 56
                            }
                        )
                    )
                ),
                createElement(
                    'div',
                    {
                        className: "collapse navbar-collapse",
                        id: "navbarCollapse"
                    },
                    createElement(
                        "ul",
                        {
                            className: "navbar-nav mr-auto"
                        },
                        createElement(
                            "li",
                            {
                                className: "nav-item"
                            },
                            createElement(Link, { className: 'nav-link', to: "/"}, "Home")
                        ),
                        createElement(
                            "li",
                            {
                                className: "nav-item"
                            },
                            createElement(Link, { className: 'nav-link', to: "/about"}, "About")
                        ),
                        createElement(
                            "li",
                            {
                                className: "nav-item"
                            },
                            createElement(Link, { className: 'nav-link', to: "/contact"}, "Contact")
                        )
                    )
                )
            )
        );
    }
}

export default Navigation;