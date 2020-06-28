const {
    useState,
    useEffect
} = React;

const {
    createElement
} = React;

let createPage = (path, title) => {
    return () => {
        const [content, setContent] = useState('');

        useEffect(() => {
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
                setContent(result);
                document.title = title;
            });
        }, []);

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
                HTMLReactParser(content)
            )
        );
    }
}

export default createPage;