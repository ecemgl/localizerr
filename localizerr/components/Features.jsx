import styles from '../styles/Features.module.css'


const Features = () => {
	return(
		<div className={styles.features}>
			<div><h1 className={styles.title}>Localizerr ile lokal olun.</h1></div>
			
		
			<div className={styles.container}>
		

			
			<ul className={styles.list}>
			<h1 className={styles.title_tmp}>Localizerr ile lokal olun.</h1>
				<div className={styles.first_line}>
				
				<li className={styles.listItem}>
					<div className={styles.group}>
					<div className={styles.oval}><img src='./Oval.svg' /></div>
					<div className={styles.icon}><img src='./Ticket.svg' /></div>
					
					</div>
					<p className={styles.subtitle}>Reklam Yönetimi</p>
					<p className={styles.description}>
					Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs</p>
				</li>
				<li className={styles.listItem}>
				<div className={styles.group}>

				<div className={styles.oval}><img src='./Oval.svg' /></div>
					<div className={styles.icon}><img src='./Users.svg' /></div>
					</div>
					<p className={styles.subtitle}>Yurtdışı Depo Desteği</p>
					<p className={styles.description}>
					Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs</p>
				</li>
				<li className={styles.listItem}>
				<div className={styles.group}>

				<div className={styles.oval}><img src='./Oval.svg' /></div>
					<div className={styles.icon}><img src='./Mail.svg' /></div>
					</div>
					<p className={styles.subtitle}>Profesyonel Listeleme</p>
					<p className={styles.description}>
				Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs</p>				</li>
				
				</div>
				<div className={styles.second_line}>
				<li className={styles.listItem}>
				<div className={styles.group}>

				<div className={styles.oval}><img src='./Oval.svg' /></div>
					<div className={styles.icon}><img src='./Home.svg' /></div>
					</div>
					<p className={styles.subtitle}>Hızlı Teslimat</p>
					<p className={styles.description}>
				Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs</p>				</li>
				<li className={styles.listItem}>
				<div className={styles.group}>

				<div className={styles.oval}><img src='./Oval.svg' /></div>
					<div className={styles.icon}><img src='./Basket.svg' /></div>
					</div>
					<p className={styles.subtitle}>Destek</p>
					<p className={styles.description}>
				Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs</p>				</li>
				<li className={styles.listItem}>
				<div className={styles.group}>

				<div className={styles.oval}><img src='./Oval.svg' /></div>
					<div className={styles.icon}><img src='./Puzzle.svg' /></div>
					</div>
					<p className={styles.subtitle}>Raporlama</p>
					<p className={styles.description}>
				Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs</p>				</li>
				</div>
				

			</ul>
			</div>
		</div>
	)
}


export default Features

