import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="hero">
      <div className={styles.welcome_intro}>
        <h1 className={styles.hero_title}>
          <span
            style={{ color: 'var(--ifm-color-primary)' }}
          >Hola</span>, 你好</h1>
        <p className="hero__subtitle">Feel free</p>
      </div>
      <div className={styles.welcome_svg}>
        <img src={useBaseUrl("/img/welcome.svg")} />
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
    </Layout>
  );
}
