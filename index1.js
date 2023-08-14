const { generateApi, generateTemplates } = require("swagger-typescript-api");
const path = require("path");
const fs = require("fs");

/* NOTE: all fields are optional expect one of `input`, `url`, `spec` */
generateApi({
  name: "api.ts",
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), "./__generated__"),
  unwrapResponseData: true,
  //   url: "http://api.com/swagger.json",
  input: path.resolve(process.cwd(), "./swagger.json"),
  generateClient: true,
  generateUnionEnums: true,
  extractRequestParams: true,
  extractRequestBody: true,
  generateRouteTypes: true,
  // spec: {
  //   swagger: "2.0",
  //   info: {
  //     version: "1.0.0",
  //     title: "Swagger Petstore",
  //   },
  //   // ...
  // },
  templates: path.resolve(process.cwd(), "./out"),
  // httpClientType: "axios", // or "fetch"
  // defaultResponseAsSuccess: false,
  // generateClient: true,
  // generateRouteTypes: false,
  // generateResponses: true,
  // toJS: false,
  // extractRequestParams: false,
  // extractRequestBody: false,
  // extractEnums: false,
  // unwrapResponseData: false,
  // prettier: {
  //   // By default prettier config is load from your project
  //   printWidth: 120,
  //   tabWidth: 2,
  //   trailingComma: "all",
  //   parser: "typescript",
  // },
  // defaultResponseType: "void",
  // singleHttpClient: true,
  // cleanOutput: false,
  // enumNamesAsValues: false,
  // moduleNameFirstTag: false,
  // generateUnionEnums: false,
  // typePrefix: "",
  // typeSuffix: "",
  // enumKeyPrefix: "",
  // enumKeySuffix: "",
  // addReadonly: false,
  // extractingOptions: {
  //   requestBodySuffix: ["Payload", "Body", "Input"],
  //   requestParamsSuffix: ["Params"],
  //   responseBodySuffix: ["Data", "Result", "Output"],
  //   responseErrorSuffix: [
  //     "Error",
  //     "Fail",
  //     "Fails",
  //     "ErrorData",
  //     "HttpError",
  //     "BadResponse",
  //   ],
  // },
  // /** allow to generate extra files based with this extra templates, see more below */
  // extraTemplates: [],
  // anotherArrayType: false,
  // fixInvalidTypeNamePrefix: "Type",
  // fixInvalidEnumKeyPrefix: "Value",
  // codeGenConstructs: (constructs) => ({
  //   ...constructs,
  //   RecordType: (key, value) => `MyRecord<key, value>`,
  // }),
  // primitiveTypeConstructs: (constructs) => ({
  //   ...constructs,
  //   string: {
  //     "date-time": "Date",
  //   },
  // }),
  hooks: {
    onCreateComponent: (component) => {
    },
    onCreateRequestParams: (rawType) => {},
    onCreateRoute: (routeData) => {},
    onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
    onFormatRouteName: (routeInfo, templateRouteName) => {},
    onFormatTypeName: (typeName, rawTypeName, schemaType) => {},
    onInit: (configuration) => {},
    onPreParseSchema: (originalSchema, typeName, schemaType) => {},
    onParseSchema: (originalSchema, parsedSchema) => {},
    onPrepareConfig: (currentConfiguration) => {},
  },
})
  .then(({ files, configuration }) => {
    
    // files.forEach(({ content, name }) => {
    //   console.log(123, content)
    //   fs.writeFile(path, content);
    // });
  })
  .catch((e) => console.error(e));

generateTemplates({
  cleanOutput: false,
  output: "./out",
  httpClientType: "fetch",
  modular: false,
  silent: false,
  rewrite: false,
});