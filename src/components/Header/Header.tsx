import smoothScroll from "../../helpers/smoothScroll";
import styles from "./Header.module.scss";
import TestSiteLogo from "../../images/logo.svg";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.header_container}>
        <img src={TestSiteLogo} alt="logo" className={styles.logo} />
        <div className={styles.button_group}>
          <button className={styles.standard_button} onClick={() => smoothScroll("users_section")}>
            Users
          </button>
          <button className={styles.standard_button} onClick={() => smoothScroll("form-submit")}>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
