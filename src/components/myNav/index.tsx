import { memo } from 'react'

import "./index.scss"

import { Trans } from 'react-i18next'


// const el = document.querySelector(".sticky")
// const observer = new IntersectionObserver( 
//   ([e]) => e.target.classList.toggle("is-sticky", e.intersectionRatio < 1),
//   { threshold: [1] }
// );

// observer.observe(el);
// 操作按钮
const tabList = [
    {
        name: "about me",
    },
    {
        name: "project"
    },
    {
        name: "website"
    },
    {
        name: "connect me"
    },
    {
        name: "简",
        selectList: ['简', 'English']
    },
]

const myNav = memo(() => {

    return (
        <div className="sticky-top sticky">
            <nav className="navbar navbar-expand-md ">
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
                                    <div key={index} className="nav-link">
                                        <Trans>{ele.name}</Trans>
                                    </div>
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
