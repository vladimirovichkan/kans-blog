import { useState } from 'react';
import { useSpring, animated } from 'react-spring'

import Link from "next/link";
import 'material-icons/iconfont/material-icons.css';

import Logo from "../logo";
import MobileNav from '../mobile-nav';
import styles from './header.module.css'

export default function Header() {
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled)
    }

    const [animationStyles, api] = useSpring(() => ({ width: '100vw', height: '0px' }))
    api.start({height: navToggled ? '500px' : '0px'})
    
    return (
        <header className={styles.header}>
            <Logo></Logo>
            <button className={styles.menuToggler} onClick={handleNavToggle}>
                <span className={`${styles.openIcon} ${navToggled ? 'hidden' : ''} material-icons-round`}>menu</span>
            </button>
            <animated.div style={animationStyles} className={styles.mobileNavWrapper}>
                <MobileNav closeNavHandle={handleNavToggle}/>
            </animated.div>
            {/* <div className={navToggled ? 'absolute' : 'hidden'}>
            </div> */}
        </header>
    )
}