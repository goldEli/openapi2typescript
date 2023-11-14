const fs = require('fs');
const path = require('path');

const getCamelCaseString = (arr) => {
    // 使用正则表达式模式进行匹配
    const pattern = /^[A-Za-z]+$/;
    console.log('arr', arr)

    const str = arr
        .filter((item) => !!item && item !== 'api')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");

    const ret = str.charAt(0).toLowerCase() + str.slice(1);
    return ret
};

function notAllowCreate(option) {

    const { api: str, isAll } = option
    const { apiUrl } = global
    console.log('docPath, str', apiUrl, str, isAll)
    if (isAll) {
        return false
    }
    if (apiUrl === `/${str}`) {
        return false
    }

    return true
}


function createSourcePath(outputPath) {
    const { requestMethod, moduleName, apiUrl } = global

    const paths = apiUrl.split('/') ?? []
    let dirName = getCamelCaseString(paths.slice(0, -1))
    if (dirName) {
        dirName = path.join(outputPath, dirName)
    } else {
        dirName = path.join(outputPath, moduleName)
    }
    const fileName = path.join(dirName, `${requestMethod}.ts`)

    return {
        dirName,
        fileName
    }
}

function createFile(filePath, content) {
    return new Promise((resolve, reject) => {

        // 使用fs模块的writeFile方法创建文件  
        fs.writeFile(filePath, content, (error) => {
            if (error) {
                console.error(`Error creating file ${filePath}:`, error);
                reject(error)
                return;
            }

            resolve("success")
            console.log(`File ${filePath} created successfully.`);
        });
    })
}

function createDirectory(directoryPath) {
    return new Promise((resolve, reject) => {
        // 使用path模块将输入路径转换为绝对路径  
        const absolutePath = path.resolve(directoryPath);

        // 检查目录是否已经存在  
        if (fs.existsSync(absolutePath)) {
            console.log(`Directory ${absolutePath} already exists.`);
            resolve()
            return;
        }

        // 创建目录  
        fs.mkdir(absolutePath, { recursive: true }, (error) => {
            if (error) {
                console.error(`Error creating directory ${absolutePath}:`, error);
                reject(error);
                return;
            }

            console.log(`Directory ${absolutePath} created successfully.`);
            resolve('success')
        });

    })

}

const utils = {
    createDirectory,
    createFile,
    createSourcePath,
    notAllowCreate
}
module.exports = utils;