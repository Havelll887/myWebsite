import React, { useRef, useState, Suspense } from 'react'
import { Transition } from 'react-transition-group';
import { CSSTransition } from "react-transition-group";

import "./index.scss"

const pageIndex1 = () => {
    return (<div></div>)
}

export const FrontContainer = React.memo(pageIndex1); 
