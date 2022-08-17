import styles from '../styles/Faq.module.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react'



const Faq = () => {
	const [selected,setSelected] = useState(null);

	const toggle = (i) => {
		if(selected === i){
			return setSelected(null)
		}
		setSelected(i)
	}
	return (
		<div className={styles.faq}>
			<div className={styles.container}>
				<div className={styles.subtitle}>
				<h1 className={styles.first}>Sıkça Sorulan Sorular</h1>
			<p className={styles.second}>Sorularınızı yanıtlamış olabiliriz.</p>
				</div>
			
			<div className={styles.accordion}>
				{data.map((item,i) => (
						<div className={styles.item}>
							<div className={styles.title} onClick={() => toggle(i)}>
								<h2>{item.question}</h2>
								<span>{selected === i ? '-' : '+'}</span>
							</div>
							<div className={selected === i ? styles.content.show : styles.content}>{item.answer}</div>

							<div ><img src='./Divider.svg' /></div>
						</div>
				))}
			</div>
		</div>
		</div>
		
	);
}

const data = [
	{
			question:'Localizerr şirketime nasıl yardımcı olabilir?',
			answer:'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or FigmaCreate screens directly in Method or add your images from Sketch or Figma. '
		},
	{		question:'Localizerr dijital pazarlama hizmeti veriyor mu?',
			answer:'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or FigmaCreate screens directly in Method or add your images from Sketch or Figma. '
		},
	{		question:'Müşteri hizmetleri ile kim ilgileniyor?',
			answer:'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or FigmaCreate screens directly in Method or add your images from Sketch or Figma. '
		},
	{		question:'Hangi Pazar Yerleri’nde satış yapabiliyoruz?',
			answer:'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or FigmaCreate screens directly in Method or add your images from Sketch or Figma. '
		},
	{		question:'Satış sisteminiz konsinye satış olarak mı ilerliyorsunuz yoksa kesin satış olarak mı?',
			answer:'Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage! Create screens directly in Method or add your images from Sketch or FigmaCreate screens directly in Method or add your images from Sketch or Figma. '
		}
]

export default Faq