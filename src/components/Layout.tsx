import type * as elements from "typed-html";

type LayoutProps = {
    title?: string;
};

export const Layout = (props: LayoutProps & elements.Children) => {
    const { title = "elysia-webserver" } = props;
    return (
        "<!DOCTYPE html>" +
        (
            <html lang="en" class="dark">
                <head>
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <script
                        src="https://unpkg.com/htmx.org@1.9.8"
                        integrity="sha384-rgjA7mptc2ETQqXoYC3/zJvkU7K/aP44Y+z7xQuJiVnB/422P/Ak+F/AqFR7E4Wr"
                        crossorigin="anonymous"
                    ></script>
                    <title>{title}</title>
                </head>
                <body>{props.children}</body>
            </html>
        )
    );
};
