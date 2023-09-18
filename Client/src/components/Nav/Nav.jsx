import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import {Link} from 'react-router-dom'

const Nav = (props) => {
    const {onSearch} = props
    return (
        <div className={styles.fondoNav}>
            <div>
                <Link to={'/about'}><button className={styles.botones}> About </button></Link>
                <Link to={'/home'}><button className={styles.botones}> Home </button></Link>
                <Link to={'/favorites'}><button className={styles.botones}> Favorites </button></Link>
            </div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav