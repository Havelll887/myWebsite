// import { memo } from 'react'
import "./cat.scss"

const Cat = () => {
    return (
        <div className="main">
            <div className="cat">
                <span className="stand"></span>

                <div className="body"></div>
                {/* <!-- 头 --> */}
                <div className="head">
                    <div className="ear"></div>
                    <div className="ear"></div>
                </div>
                {/* <!-- 脸 --> */}
                <div className="face">
                    {/* <!-- 鼻子 --> */}
                    <div className="nose"></div>
                    <div className="whisker-container">
                        <div className="whisker"></div>
                        <div className="whisker"></div>
                    </div>
                    <div className="whisker-container">
                        <div className="whisker"></div>
                        <div className="whisker"></div>
                    </div>
                </div>
                {/* <!-- 尾巴 --> */}
                <div className="tail-container">
                    <div className="tail">
                        <div className="tail">
                            <div className="tail">
                                <div className="tail">
                                    <div className="tail">
                                        <div className="tail">
                                            <div className="tail">
                                                <div className="tail"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cat