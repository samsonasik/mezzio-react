const {
    Component,
    createElement
} = React;

// https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
String.prototype.interpolate = function(state) {
    return this.replace(/\${\s+this\.state\.(\w+)\s+}/, function(match, expr) {
        return match && (state || window)[expr];
    });
};

let createPage = (path, title, data = {}) => class Page extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({ content: ''}, data);
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
            this.setState({
                content: DOMPurify.sanitize(result).interpolate(this.state)
            });
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
                HTMLReactParser(this.state.content)
            )
        );
    }
}

export default createPage;