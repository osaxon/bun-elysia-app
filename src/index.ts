import { Elysia } from "elysia";
import { apiRoutes } from "./routes/api-routes";
import { pageRoutes } from "./routes/page-routes";
import { html } from "@elysiajs/html";

const app = new Elysia();

app.group("/v1", (app) => app.use(apiRoutes))
    .use(pageRoutes)
    .get("/test", () => "hello")
    .listen(8080, ({ port }) => console.log(`app running on port ${port}`));

export type App = typeof app;
