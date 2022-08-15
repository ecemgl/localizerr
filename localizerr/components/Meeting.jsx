import styles from '../styles/Meeting.module.css'


const Meeting = () => {
	return(
		<div className={styles.meeting}>
			<h1 className={styles.title}>Hadi bir toplantı planlayalım.</h1>
			<h1 className={styles.description}>Localizerr ile tüm dünyada lokal olmaya ilk adımı atın.</h1>
			<div className={styles.button}>
				<button type="button" class="btn btn-outline-primary btn-lg toplanti-planla-btn" >Bir Toplantı Planla</button>

			</div>
			<div className={styles.meetingSvgs}>
				<div><img src='./Meeting.svg' /></div>
				<div className={styles.dividerSvg}><img src='./Divider.svg' /></div>
			</div>
			

			
		</div>
	)
}


export default Meeting

