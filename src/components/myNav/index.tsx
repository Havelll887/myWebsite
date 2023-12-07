import React from 'react'

import "./index.scss"


// 操作按钮
const tabList = [
    {
        name: "基本信息",
    },
    {
        name: "职业经验"
    },
    {
        name: "项目经验"
    },
    {
        name: "线上作品"
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