let navigationTemplate = `
<div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="#navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a href="/#/"class="navbar-brand"><img src="https://docs.laminas.dev/img/laminas-mezzio-rgb.svg" alt="Laminas Mezzio" height="56" /></a>
    </div>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a href="/#/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="/#/about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="/#/contact" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</div>
`;

class Navigation extends React.Component {
    render() {
      return React.createElement(
            'nav',
            {
                className : "navbar navbar-expand-sm navbar-dark bg-dark fixed-top",
                role: "navigation"
            },
            HTMLReactParser(navigationTemplate)
        );
    }
}

export default Navigation;