const {
  NavLink
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
        className: 'navbar navbar-expand-sm navbar-dark bg-dark fixed-top',
        role: 'navigation'
      },
      createElement(
        'div',
        {
          className: 'container'
        },
        createElement(
          'div',
          {
            className: 'navbar-header'
          },
          createElement(
            'button',
            {
              className: 'navbar-toggler',
              'data-toggle': 'collapse',
              'data-target': '#navbarCollapse',
              'aria-controls': '#navbarCollapse',
              'aria-expanded': 'false',
              'aria-label': 'Toggle navigation'
            },
            createElement(
              'span',
              {
                className: 'navbar-toggler-icon'
              }
            )
          ),
          createElement(
            NavLink,
            {
              to: '/',
              className: 'navbar-brand'
            },
            createElement(
              'img',
              {
                src: 'https://docs.laminas.dev/img/laminas-mezzio-rgb.svg',
                alt: 'Laminas Mezzio',
                height: 56
              }
            )
          )
        ),
        createElement(
          'div',
          {
            className: 'collapse navbar-collapse',
            id: 'navbarCollapse'
          },
          createElement(
            'div',
            {
              className: 'navbar-nav mr-auto'
            },
            createElement(
              'div',
              {
                className: 'nav-item'
              },
              createElement(NavLink, {className: 'nav-link', to: '/'}, 'Home')
            ),
            createElement(
              'div',
              {
                className: 'nav-item'
              },
              createElement(NavLink, {className: 'nav-link', to: '/about'}, 'About')
            ),
            createElement(
              'div',
              {
                className: 'nav-item'
              },
              createElement(NavLink, {className: 'nav-link', to: '/contact'}, 'Contact')
            )
          )
        )
      )
    );
  }
}

export default Navigation;
