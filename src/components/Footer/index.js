import styles from '../../../styles/Footer.module.scss';
function Footer() {
	return (
		<div className={styles.footer}>
			<span>Pokemon App </span> &copy; {new Date().getFullYear()}
		</div>
	);
}

export default Footer;
