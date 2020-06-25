let createPage = (path, title) => class Page extends React.Component {
    state = { content: '' }

    componentDidMount() {
        new Promise( (resolve) => {
            fetch(
                path,
                {
                    method: 'GET',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                    }
                }
            ).then(response =>  resolve(response.text()));
        }).then(result => {
            this.setState({ content : result });
            document.title = title;

            [].filter.call(document.querySelectorAll('.nav-link'), function(el) {
                if (el.getAttribute('href') === path) {
                    el.classList.add('active');
                    return;
                }

                el.classList.remove('active');
            });

        });
    }

    render() {
      return React.createElement(
            'div',
            {
                className : "app-content",
            },
            React.createElement(
                "main",
                {
                    className : "container"
                },
                HTMLReactParser(this.state.content)
            )
        );
    }
}

export default createPage;