import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = ({services}) => {
	return(
		<div className={styles.container}>
			<div className={styles.card}>
			<div><img src='./Localizerr.svg' alt='next' /></div>

		<div className={styles.firstColumn}>Sınırları kaldıran, üreticiden tüketiciye, doğrudan satış platformu.Localizerr, dünyanın farklı lokasyonlarındaki ofis ve satış personeli ile ürünlerinizi tüm dünyaya pazarlıyor.
			<p>Copyright © 2022 Angels & Partners S.L.</p></div>
			

			</div>
			<div className={styles.card}>
			<p className={styles.subtitles}>Menü</p>
			<ul className={styles.list}>
				<li className={styles.listItem_menu}>
					<Link href="/product/design">Kariyer</Link>
				</li>
				<li className={styles.listItem_menu}>
					<Link href="/product/design">İletişim</Link>
				</li>
				<li className={styles.listItem_menu}>
					<Link href="/product/design">Kullanım Sözleşmesi</Link>
				</li>
				<li className={styles.listItem_menu}>
					<Link href="/product/design">Aydınlatma Metni ve Çerez Politikası</Link>
				</li>
				<li className={styles.listItem_menu}>
					<Link href="/product/design">Mesafeli Satış Sözleşmesi</Link>
				</li>

			</ul>
			</div>
			<div className={styles.card}>
			<p className={styles.subtitles}>Adresler</p>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<p className={styles.locations}>İspanya</p>
					<p className={styles.location_desc}>Calle Velázquez 15 28001 Madrid, Spain</p>

				</li>
				<li className={styles.listItem}>
					<p className={styles.locations}>İtalya</p>
					<p className={styles.location_desc}>Vico Latilla 18, 80134 Napoli</p>

				</li>
				<li className={styles.listItem}>
					<p className={styles.locations}>Amerika Birleşik Devletleri</p>
					<p className={styles.location_desc}>HQ One Gateway Center, ste. 2600, Newark, NJ 07102 U.S.</p>

				</li>
				<li className={styles.listItem}>
					<p className={styles.locations}>Türkiye</p>
					<p className={styles.location_desc}>Tesvikiye Mah. Ahmet Fetgeri Sok. No.35 D.9 TR-34365 Istanbul</p>

				</li>
			

			</ul>
			</div>
			<div className={styles.card}>
			<p className={styles.subtitles}>İletişim</p>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<p className={styles.locations}>Telefon</p>
					<p className={styles.location_desc}>+90 212 216 00 13</p>

				</li>
				<li className={styles.listItem}>
					<p className={styles.locations}>Email</p>
					<p className={styles.location_desc}>info@localizerr.com</p>

				</li>
				
				<div className={styles.icons}>
				<div className={styles.icon}><img src='./Twitter.svg' alt='next' /></div>
				<div className={styles.icon}><img src='./LinkedIn.svg' alt='next' /></div>
				<div className={styles.icon}><img src='./Google.svg' alt='next' /></div>
				</div>
			

			

			</ul>
			</div>
		</div>
	)
}


export default Footer