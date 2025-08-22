const path = require("path")

// 公共scss样式
const commonScssPath = '~@/common/css/common.scss';

module.exports = {
    webpack: {
        // 配置路径别名
        alias: {
            "@": path.join(__dirname, "src"),
        },
        configure: (webpackConfig: any) => {
            // 移除所有的 source-map-loader 规则
            webpackConfig.module.rules = webpackConfig.module.rules.filter((rule: any) => {
                // 过滤掉使用 source-map-loader 的规则
                if (rule.use) {
                    // 如果是数组，检查每一项
                    if (Array.isArray(rule.use)) {
                        let hasSourceMapLoader = false;
                        rule.use = rule.use.filter((useObj: any) => {
                            if (typeof useObj === 'string') {
                                return !useObj.includes('source-map-loader');
                            } else if (useObj.loader) {
                                return !useObj.loader.includes('source-map-loader');
                            }
                            return true;
                        });
                        // 如果这个规则中所有的 use 都被移除了，那么整个规则也移除
                        if (rule.use.length === 0) {
                            return false;
                        }
                    } else if (typeof rule.use === 'string' && rule.use.includes('source-map-loader')) {
                        return false;
                    } else if (rule.use.loader && rule.use.loader.includes('source-map-loader')) {
                        return false;
                    }
                }
                return true;
            });
            return webpackConfig;
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

