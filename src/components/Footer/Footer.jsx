
import  {BsArrowUpCircle} from 'react-icons/bs'
import { Link } from 'react-scroll'
import './Footer.scss'
export default function Footer(){
    return(
        <footer className="footer">
            <Link className="relocation-section"
                to='header'
                smooth={true}
                spy={true}
                duration={500}>
                <BsArrowUpCircle style={{width: 40, height: 40, color: 'white'}}/>
            </Link>
            © 2023 Yurri Shumelchuk
        </footer>
    )
}