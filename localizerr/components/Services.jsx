import styles from '../styles/Services.module.css'
import Image from 'next/image'
const Services = ({services}) => {
	return(
		<div className={styles.container}>
			<div className={styles.card}>
			<h1 className={styles.brand}>Markanızı global pazarda birlikte test edelim!</h1>
			<h1 className={styles.description}>Localizerr 360 derece ihracat çözümleri sunarak, üreticilerin yurtdışı pazar ve pazaryerinde satış yapmalarını sağlar. </h1>
			<h1 className={styles.service}>
			
			<div className={styles.oval}>
				<img src='./Oval.svg'  />
			</div>			
			<div className={styles.icon}>
				<img src='./Location.svg' />
			</div>
			Doğru listeleme ve Optimizasyon
			</h1>
			
			<h1 className={styles.service}>
			
			<div className={styles.oval}>
				<img src='./Oval.svg' />
			</div>
			<div className={styles.icon}>
				<img src='./Message.svg' />	
			</div>
			Depo, Stok, Satış ve Satış Sonrası Servisler
			</h1>
			
			<h1 className={styles.service}>
			
			<div className={styles.oval}>
				<img src='./Oval.svg' />
			</div>
			<div className={styles.icon}>
				<img src='./PieChart.svg' />
			</div>
				


			Bölgesel Ekip ve Yetkin Temsilciler
			</h1>
			</div>
			<div className={styles.card}>
			<div className={styles.brandlist}>
			<img src='./ServiceImg.svg' /></div>

			</div>
		</div>
	)
}


export default Services