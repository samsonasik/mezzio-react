const {
    useState,
    useEffect
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

                [].filter.call(document.querySelectorAll('.nav-link'), function(el) {
                    if (el.getAttribute('href') === path) {
                        el.classList.add('active');
                        return;
                    }

                    el.classList.remove('active');
                });
            });
        }, []);

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
                HTMLReactParser(content)
            )
        );
    }
}

export default createPage;