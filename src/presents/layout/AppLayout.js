import React from "react";
import {Link} from "react-router-dom";
import "../../assets/css/Layout/layout.css";

import {ReactComponent as Play} from "../../assets/icon/play.svg";
import {ReactComponent as Block} from "../../assets/icon/block.svg";
import {ReactComponent as Setting} from "../../assets/icon/setting.svg";
import {ReactComponent as Hide} from "../../assets/icon/hide.svg";

const AppLayout = ({active, minimize, ...props}) => (
    <div className="layout">
        <div className="navbar">
            <div>
                <Link to="/" className={active("/") ? "active" : ""}>
                    <Play/>
                </Link>
                <Link to="/block" className={active("/block") ? "active" : ""}>
                    <Block/>
                </Link>
                <Link to="/option" className={active("/option") ? "active" : ""}>
                    <Setting/>
                </Link>
            </div>
            <button onClick={minimize}><Hide /></button>
        </div>
        <div className="body">{props.children}</div>
    </div>
)

export default AppLayout;
