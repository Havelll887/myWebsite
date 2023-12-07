const path = require("path")

// 公共scss样式
const commonScssPath = '~@/common/css/common.scss';

module.exports = {
    webpack: {
        // 配置路径别名
        alias: {
            "@": path.join(__dirname, "src"),
        },
    },
    style: {
        sass: {
            loaderOptions: {
                // 引入全局定义的样式文件
                additionalData: `@import "${commonScssPath}";`
            }
        }
    }

}

export { }

