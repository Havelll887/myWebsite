import React from 'react'

import "./index.scss"



export default class myNav extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="header-container">
                <div className="header-contents">
                    {/* 左侧的logo */}
                    <div>这里是导航栏内容</div>
                    {/* 右侧的导航标签 */}
                    <div>
                        <div>基本信息</div>
                        <div>职业经验</div>
                        <div>项目经验</div>
                        <div>线上作品</div>
                        <div>联系我</div>
                    </div>
                </div>
            </div>
        )
    }
}