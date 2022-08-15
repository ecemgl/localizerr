import styles from '../styles/Intro.module.css'
import Image from 'next/image'

const Intro = () => {
	return(
		<div className={styles.container}>
			<div className={styles.card}>
				<h1 className={styles.firstTitle}>Curving Global Trade</h1>
				<h1 className={styles.secondTitle}>
					Ürünleriniz Yurtdışı Pazarında Satışa Çıkıyor
				</h1>
				<p className={styles.thirdTitle}>Sınırları kaldıran, üreticiden tüketiciye, doğrudan satış platformu. Localizerr, dünyanın farklı lokasyonlarındaki ofis ve satış personeli ile ürünlerininizi tümdünyaya pazarlıyor.</p>
				
				<button className={styles.button}>
					<div><img src='./PlayButton.svg'/></div>
				</button>

				<div className={styles.introSvgs}>
				<div className={styles.brandlist} ><img src='./Intro.svg' alt='next' /></div>
				</div>
				</div>
					
				
		</div>
	)
} 

export default Intro