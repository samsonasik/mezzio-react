let createPage = (path, title) => class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: ''};
    }

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