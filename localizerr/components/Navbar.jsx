import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';



const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
			<div><img src='./Localizerr.svg' /></div>

			</div>
			
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<Link href="/">Nedir?</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="/">Özellikler</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="/">Sıkça Sorulan Sorular</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="/">İletişim</Link>
				</li>

			</ul>
			<div className={styles.button}>
				<button type="button" class="btn btn-outline-primary btn-lg demo-iste-btn" >Demo İste</button>
			</div>
			
		</div>
	);
}

export default Navbar