import fs from "node:fs";
import openapiTS from "openapi-typescript";

// example 1: load [object] as schema (JSON only)
const schema = await fs.promises.readFile("swagger.json", "utf8"); // must be OpenAPI JSON
const output = await openapiTS(JSON.parse(schema));
console.log(output);

// // example 2: load [string] as local file (YAML or JSON; released in v4.0)
// const localPath = new URL("./spec.yaml", import.meta.url); // may be YAML or JSON format
// const output = await openapiTS(localPath);

// // example 3: load [string] as remote URL (YAML or JSON; released in v4.0)
// const output = await openapiTS("https://myurl.com/v1/openapi.yaml");