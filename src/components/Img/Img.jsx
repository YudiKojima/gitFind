import styles from './Img.module.css';
import background from '../../assets/backgroudmetade.png'


function Img(){
    return(
        <div>
            <img src={background} alt="gitbackground" className={styles.background} />
        </div>
    )
}

export default Img