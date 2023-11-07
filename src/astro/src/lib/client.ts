// client.ts
import { edenFetch } from "@elysiajs/eden";
import type { App } from "../../../index";

export const client = edenFetch<App>("http://localhost:8080");
