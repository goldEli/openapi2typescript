# OpenAPI JSON convert to typescript

1. copy openAPI json 
2. execute npx ifun-o2t

### Config

config output dir name

```shell
# default output dir name is ./src/_api
npx ifun-o2t -o ./src/api

# 指定生成 api 注意前面的斜线一定要去掉
npx ifun-o2t -i api/msg-center/message/getList

# 所有接口
npx ifun-o2t -a
```