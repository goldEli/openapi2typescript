#! /usr/bin/env node

const { generateApi, generateTemplates } = require("swagger-typescript-api");
const path = require("path");
const { createDirectory, createFile, createSourcePath } = require("./utils")
const fs = require("fs");
const ncp = require("copy-paste");
const log = require("./utils/log");
const text = ncp.paste();


async function main() {
  log.success("开始生成API文件");
  let openApiJSON;
  try {
    openApiJSON = JSON.parse(text);
  } catch (error) {
    log.error("请复制符合OpenAPI结构数据！！！");
    return;
  }

  const root = process.cwd()
  const inputUrl = path.resolve(process.cwd(), "./swagger.json")
  log.success('inputUrl' + inputUrl)
  const templatePath = path.resolve(__dirname, "./template")
  await createFile(inputUrl, JSON.stringify(openApiJSON))
  log.error(templatePath)

  generateApi({
    name: "api.ts",
    // set to `false` to prevent the tool from writing to disk
    // output: path.resolve(process.cwd(), "./__generated__"),
    unwrapResponseData: true,
    //   url: "http://api.com/swagger.json",
    input: inputUrl,
    // spec: openApiJSON,
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
    templates: templatePath,
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
      onCreateRequestParams: (rawType) => { },
      onCreateRoute: (routeData) => { },
      onCreateRouteName: (routeNameInfo, rawRouteInfo) => { },
      onFormatRouteName: (routeInfo, templateRouteName) => { },
      onFormatTypeName: (typeName, rawTypeName, schemaType) => { },
      onInit: (configuration) => { },
      onPreParseSchema: (originalSchema, typeName, schemaType) => { },
      onParseSchema: (originalSchema, parsedSchema) => { },
      onPrepareConfig: (currentConfiguration) => { },
    },
  })
    .then(async ({ files, configuration }) => {
      // const { requestMethod, moduleName } = global
      // const dirName = path.join(generatedUrl, moduleName)
      // const fileName = path.join(dirName, `${requestMethod}.ts`)
      // console.log(files, 123)
      const { fileName, dirName } = createSourcePath()
      await createDirectory(dirName)
      files.forEach(async ({ fileContent, name }) => {
        // fs.writeFile(fileName, content);
        await createFile(fileName, fileContent)
        log.success("api 生成成功:" + fileName)
      });
    })
    .catch((e) => console.error(e));

  // generateTemplates({
  //   cleanOutput: false,
  //   output: "./out",
  //   httpClientType: "fetch",
  //   modular: false,
  //   silent: false,
  //   rewrite: false,
  // });
}

main()
