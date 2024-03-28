import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

import socialCard from "@site/static/img/social-card.jpg";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx(styles.heroBanner)} style={{height: "calc(100vh - 60px)"}}>
        <div className="container">
          <img src={socialCard} style={{width: "calc(100vh)"}}/>
          <h1 className="hero__title">Hola, here is <span className={styles.highlighted}>{siteConfig.title}</span></h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
    </Layout>
  );
}