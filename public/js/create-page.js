const {
    Component,
    createElement
} = React;

let createPage = (path, title) => class Page extends Component {
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
      return createElement(
            'div',
            {
                className : "app-content",
            },
            createElement(
                "main",
                {
                    className : "container"
                },
                HTMLReactParser(DOMPurify.sanitize(this.state.content))
            )
        );
    }
}

export default createPage;