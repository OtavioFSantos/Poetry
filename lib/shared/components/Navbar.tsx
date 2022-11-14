import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <h3 className={styles.title}>Write your pain away...</h3>
      </div>
    </nav>
  );
}
