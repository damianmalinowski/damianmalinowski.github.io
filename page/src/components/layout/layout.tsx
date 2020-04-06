import styles from './layout.module.scss';
import { githubIcon } from './svg-icons';
import { Link } from 'gatsby';
import React from 'react';

export const Layout: React.FC = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <nav>
          <div className={styles.logo}>
            <img src={'/logo.png'} alt="logo" />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="http://www.github.com/damianmalinowski">{githubIcon}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};
