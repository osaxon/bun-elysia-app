import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

export const pageRoutes = new Elysia().use(html()).get("/", () => {
    const formatAndDisplayData = (jsonData: any) => {
        const formattedJson = JSON.stringify(jsonData, null, 4); // 4 is the number of spaces for indentation
    };
    return (
        "<!doctype html>" +
        (
            <html lang="en" class="dark">
                <head>
                    <meta charset="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link href="/public/globals.css" rel="stylesheet" />
                    <script
                        src="https://unpkg.com/htmx.org@1.9.8"
                        integrity="sha384-rgjA7mptc2ETQqXoYC3/zJvkU7K/aP44Y+z7xQuJiVnB/422P/Ak+F/AqFR7E4Wr"
                        crossorigin="anonymous"
                    ></script>
                    <title>Elysia Server</title>
                </head>
                <body>
                    <main>
                        <h1 style={{ fontFamily: "fantasy" }}>
                            The Cat & Dog Server
                        </h1>

                        <button
                            hx-get="/v1/cats"
                            hx-target="#dataContainer"
                            hx-swap="innerHTML"
                            style={{ marginRight: "5px" }}
                        >
                            Get Cats
                        </button>
                        <button
                            hx-get="/v1/dogs"
                            hx-target="#dataContainer"
                            hx-swap="innerHTML"
                        >
                            Get Dogs
                        </button>
                        <pre
                            style={{
                                whiteSpace: "pre-wrap",
                                fontFamily: "monospace",
                                padding: "20px",
                            }}
                        >
                            <code id="dataContainer">
                                {/* JSON DATA LOADS HERE */}
                            </code>
                        </pre>
                    </main>
                </body>
            </html>
        )
    );
});
