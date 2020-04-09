import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">ホーム</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">要項集</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">写真館</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">東北大大会</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit"> LOG IN(学内ページ)</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
