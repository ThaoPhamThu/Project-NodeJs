const path = require('path');

const uploadSingleFile = async (fileOject) => {
    let uploadPath = path.resolve(__dirname, '../public/images/upload');

    let extName = path.extname(fileOject.name);
    let baseName = path.basename(fileOject.name, extName);

    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;
    try {
        await fileOject.mv(finalPath);
        return {
            status: 'success',
            path: finalName,
            error: null
        }
    } catch (error) {
        console.log(error);
        return {
            status: 'failes',
            path: null,
            error: JSON.stringify(error)
        }
    }

};

const uploadMultiFiles = async (fileArr) => {
    try {
        let uploadPath = path.resolve(__dirname, '../public/images/upload');
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < fileArr.length; i++) {
            let extName = path.extname(fileArr[i].name);
            let baseName = path.basename(fileArr[i].name, extName);

            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;
            try {
                await fileArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: fileArr[i].name,
                    error: null
                });
                countSuccess++;
            } catch (error) {
                resultArr.push({
                    status: 'failes',
                    path: null,
                    finalName: fileArr[i].name,
                    error: JSON.stringify(error)
                });
            }
        };
        return {
            countSuccess: countSuccess,
            datail: resultArr
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    uploadSingleFile,
    uploadMultiFiles
}