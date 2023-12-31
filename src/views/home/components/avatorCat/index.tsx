import { memo } from 'react'
import "./index.scss"

const avatorCat = memo(() => {
    return (
        <div className="avator">
            <div className="avator-cat-body"></div>
            <div className="avator-cat-ear">
                <div className="avator-cat-ear-left"></div>
                <div className="avator-cat-ear-right"></div>
            </div>
        </div>
    )
})

export default avatorCat