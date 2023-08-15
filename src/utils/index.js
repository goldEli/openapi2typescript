const fs = require('fs');
const path = require('path');


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
    createFile
}
module.exports = utils;