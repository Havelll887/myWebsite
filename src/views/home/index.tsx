import React, { Component } from 'react'
import "./index.scss"

export default class Home extends Component {

    render(): React.ReactNode {
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
                <div>
                    总的来说还没想好
                    <div className="row">
                        {/* 左边 */}
                        <div>图片</div>
                        {/* 文字 */}
                        <div>12</div>
                    </div>
                </div>

                {/* 项目 */}
                <div className="project-items">
                    <div>参与的大型项目，在职项目内容（面向公众且依旧有效的项目放上链接）</div>
                    {/* 公安：大数据、后台、微警务、警民通 */}
                    <div className="card-group">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>

                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>


                    </div>
                </div>

                {/*  */}
                <div className="personal-projext">
                    <div>个人练习项目为主</div>
                    <div className="jumbotron">
                        <h1 className="display-3">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}