import React, { memo } from 'react'

import "./index.scss"
import { render } from '@testing-library/react'

// import { useTranslation } from 'react-i18next'


// const el = document.querySelector(".sticky")
// const observer = new IntersectionObserver( 
//   ([e]) => e.target.classList.toggle("is-sticky", e.intersectionRatio < 1),
//   { threshold: [1] }
// );

// observer.observe(el);


const myNav = memo(() => {
    // const { t } = useTranslation()
    // 操作按钮
    const tabList = [
        {
            name: "关于我",
            // name: t('个1人中心'),
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

    return (
        <div className="sticky-top sticky">
            <nav className="navbar navbar-expand-md ">
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
        </div>

    )
})

export default myNav
