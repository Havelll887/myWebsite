import { memo } from 'react'
import "./index.scss"

const projectList = [
    {
        name: "项目名称1",
        tech: "项目技术路线项目技术路线项目技术路线项目技术路线",
        content: "项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容",
        bg: require('./src/img/tempPic.jpg')
    },
    {
        name: "项目名称2",
        tech: "项目技术路线项目技术路线项目技术路线项目技术路线",
        content: "项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容",
        bg: require('./src/img/tempPic.jpg')
    },
    {
        name: "项目名称3",
        tech: "项目技术路线项目技术路线项目技术路线项目技术路线",
        content: "项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容",
        bg: require('./src/img/tempPic.jpg')
    }
]

const personalList = [
    {
        name: "个人项目1",
        tech: "使用技术",
        content: "项目介绍",
        url: "代码仓库地址",
        bg: require('./src/img/tempPic.jpg')
    },
    {
        name: "个人项目2",
        tech: "使用技术",
        content: "项目介绍",
        url: "代码仓库地址",
        bg: require('./src/img/tempPic.jpg')
    },
    {
        name: "个人项目3",
        tech: "使用技术",
        content: "项目介绍",
        url: "代码仓库地址",
        bg: require('./src/img/tempPic.jpg')
    },
    {
        name: "个人项目3",
        tech: "使用技术",
        content: "项目介绍",
        url: "代码仓库地址",
        bg: require('./src/img/tempPic.jpg')
    }
]

const Home = memo(() => {
    return (
        <div className="body-container">
            {/* 整页的banner  */}
            <div className="hero-section">
                <div className="row">
                    {/* 画像 */}
                    <div className="col-md-5 hero-items flex-row flex-center">左边放个自画像</div>
                    {/* 简短介绍 */}
                    <div className="col-md-7 hero-items flex-row flex-center">右边一句话介绍，背景是好看背景</div>
                </div>
            </div>

            {/* 一些关于我的内容介绍 （工作经历，教育经理，个人技能等）*/}
            <div className="myself-content item-gap">
                总的来说还没想好
                <div className="row">
                    {/* 文字 */}
                    <div className="col-md-7">个人介绍内容</div>
                    {/* 右边 */}
                    <div className="col-md-5">放一张和“我”相关的图片</div>
                </div>
            </div>

            {/* gs项目 */}
            <div className="project-items item-gap">

                <div>参与的大型项目，在职项目内容（面向公众且依旧有效的项目放上链接）</div>

                {/* 公安：大数据、后台、微警务、警民通 */}
                <div className="flex-column">
                    {Object.values(projectList).map((ele, index) => {
                        return (
                            <div className="card margin-bottom-1rem" key={index}>
                                <div className={`row ${index % 2 == 0 ? "" : "item-reverse"}`} >
                                    <div className="col-md-3 project-items-pic project-items-pic-size"
                                        style={{ backgroundImage: `url(${ele.bg})` }}>
                                    </div>
                                    {/* <img className="col-md-3 project-items-pic" src={require('./src/img/tempPic.jpg')} /> */}
                                    <div className="card-body col-md-9">
                                        <h5 className="card-title">{ele.name}</h5>
                                        <p className="card-text">{ele.content}</p>
                                        <p className="card-text"><small className="text-body-secondary">{ele.tech}</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* 个人项目 */}
            <div className="personal-projext item-gap">
                <div>个人练习项目为主</div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {Object.values(personalList).map((ele, index) => {
                        return (
                            <div className="col">
                                <div className="card">
                                    <div className="personal-projext-pic personal-projext-pic-size"
                                        style={{ backgroundImage: `url(${ele.bg})` }}>
                                    </div>
                                    <div>
                                        <h5 className="card-title">{ele.name}</h5>
                                        <p className="card-text">{ele.content}</p>
                                        <p className="card-text"><small className="text-body-secondary">{ele.tech}</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
})

export default Home

