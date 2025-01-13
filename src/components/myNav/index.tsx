import { memo } from 'react'

import "./index.scss"

import { Trans } from 'react-i18next'

import Cat from './src/cat/cat'



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
        code: "about me",
    },
    {
        name: "project",
        code: "project",
    },
    {
        name: "website",
        code: "website",
    },
    {
        name: "connect me",
        code: "connect me",
    },
    {
        name: "简",
        code: "language",
        selectList: ['简', 'EN']
    },
]

interface tabListInterface {
    name?: string,
    code?: string,
    selectList?: Array<string>,
}

// const popover = new bootstrap.Popover('.popover-dismiss', {
//     trigger: 'focus'
//   })

// 右侧导航栏标签的条件渲染
const TabMenu = (ele: tabListInterface) => {
    if (ele.name !== '简') {
        return (
            <div>
                <Trans>{ele.name}</Trans>
            </div>
        )
    } else if (ele.selectList) {
        return (
            <select className="select-item" >
                {Object.values(ele.selectList).map((item, idx) => {
                    return (
                        <option key={item} defaultValue={ele.name} className="select-option"> {item}</option>
                    )
                })
                }
            </select>
        )
    }
}

const myNav = memo(() => {

    return (
        <div className="sticky-top sticky">
            <nav className="navbar navbar-expand-md ">
                <div className="container-fluid">
                    {/* 左侧的logo */}
                    <div className="left-logo">
                        <Cat />
                    </div>

                    {/* 响应式出现的菜单按钮  */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav">
                            {Object.values(tabList).map((ele, index) => {
                                return (
                                    <div key={index + '23'} className="nav-link">
                                        {TabMenu(ele)}
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
