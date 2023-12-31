import { memo } from 'react'
import { Trans } from 'react-i18next'
import "./index.scss"

import AvatorCat from "./components/avatorCat/index"
import { personalLists, projectLists } from "./src/js/data"

// 企业项目数据
const projectList = projectLists
// 个人项目数据
const personalList = personalLists

const Home = memo(() => {
    return (
        <div className="body-container">
            {/* 整页的banner  */}
            <div className="hero-section">
                <div className="row box">
                    {/* 画像 */}
                    <div className="col-md-5 hero-items flex-row flex-center ">
                        <div className="avator-box">
                            <AvatorCat />
                            {/* <div className="avator">
                                <div className="avator-cat-body"></div>
                            </div> */}
                        </div>
                        {/* <img className="avator" src={require('./src/img/img_person-avator.png')} alt='' /> */}
                    </div>
                    {/* 简短介绍 */}
                    <div className="col-md-7 hero-items flex-column flex-center">
                        <Trans>Introduce yourself</Trans>
                        <div>hello there</div>
                        <div>welcome to my space</div>
                        <div>welcome to my space</div>
                    </div>
                </div>
                <div className="hero-section-slide"><Trans>slideDown</Trans></div>
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
                                <div className={`row ${index % 2 === 0 ? "" : "item-reverse"}`} >
                                    <div className="col-md-3 project-items-pic project-items-pic-size"
                                        style={{ backgroundImage: `url(${ele.bg})` }}>
                                    </div>
                                    <div className="card-body col-md-9">
                                        <h5 className="card-title"><Trans>{ele.name}</Trans></h5>
                                        <p className="card-text"><Trans>{ele.content}</Trans></p>
                                        <p className="card-text"><small className="text-body-secondary"><Trans>{ele.tech}</Trans></small></p>
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
                            <div className="col" key={index}>
                                <div className="card">
                                    <div className="personal-projext-pic personal-projext-pic-size"
                                        style={{ backgroundImage: `url(${ele.bg})` }}>
                                    </div>
                                    <div>
                                        <h5 className="card-title"><Trans>{ele.name}</Trans></h5>
                                        <p className="card-text"><Trans>{ele.content}</Trans></p>
                                        <p className="card-text">
                                            <small className="text-body-secondary"><Trans>{ele.tech}</Trans></small></p>
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

