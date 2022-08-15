import styles from '../styles/Progress.module.css'


const Progress = () => {
	return(
		<div className={styles.progress}>
			<h1 className={styles.title}>4 Kolay Adımda Ürünlerinizi Dünyaya Açın</h1>
			<h1 className={styles.description}>Ürünlerinizi tüm dünyada test etmek ve satış yapmak için yapmanız gerekenler oldukça kolay. Temsilciniz ile birilikte tüm adımları tamamlayın.</h1>

			<div className={styles.container}>
			<div className={styles.progress_line}>
			<div><img src='./ProgressLine.svg' alt='next' /></div>


			</div>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<p className={styles.subtitle}>Abonelik Başlatın</p>
					<p>Localizerr aboneliğinizi size en uygun paket ile başlatın.</p>
				</li>
				<li className={styles.listItem}>
					<p className={styles.subtitle}>Ürünlerinizi Yükleyin</p>
					<p>Ürünlerinizi size iletildiği şekilde yükleyin ve bize gönderin.</p>
				</li>
				<li className={styles.listItem}>
					<p className={styles.subtitle}>Depomuza Gönderin</p>
					<p>Ürünlerinizi yurtdışı depomuza kargolayın</p>
				</li>
				<li className={styles.listItem}>
					<p className={styles.subtitle}>Satışa Başlayın</p>
					<p>Ürünleriniz depomuza girdikten sonra satışa başlar.</p>
				</li>

			</ul>
			</div>
		</div>
	)
}


export default Progress

