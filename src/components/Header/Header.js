import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import './Header.css';

const menuItems = ['Explore', 'Contribute', 'Help'];

const Header = () => {
    return(
        <header className="header">
            <nav className="navigation">
                <ul>
                    {menuItems.map(x => {
                        return(
                            <motion.li
                                whileHover={{scale: 1.2}}
                                key={x}
                            >
                                <Link>{x}</Link>
                            </motion.li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header