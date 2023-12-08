import React from 'react'

import "./index.scss"

// import { useTranslation } from 'react-i18next'
// const { t } = useTranslation()

// 操作按钮
const tabList = [
    {
        name: "关于我",
        // name: t('用户操作.个人中心'),
    },
    {
        name: "项目"
    },
    {
        name: "在线地址"
    },
    {
        name: "联系我"
    }
]


export default class myNav extends React.Component {
    render(): React.ReactNode {
        return (
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    {/* 左侧的logo */}
                    <div>这里是logo</div>

                    {/* 中英文切换占位 */}
                    <div>中 英</div>

                    {/* 响应式出现的菜单按钮  */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* 右侧的导航标签 */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav">
                            {Object.values(tabList).map((ele, index) => {
                                return (
                                    <div key={index} className="nav-link">{ele.name}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}