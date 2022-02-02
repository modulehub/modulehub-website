import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Control your cloud bill',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Control how much you spend on your cloud bill.
      </>
    )
  },
  {
    title: 'Terraform module registry',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Share your quality modules securely. Know what you're deploying and react.
      </>
    )
  },
  {
    title: 'Remote state backend',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Secure remote Terraform state backend regardless of cloud provider. Seriously.
      </>
    )
  },
  {
    title: 'Helm chart registry',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Share your charts securely between your projects.
      </>
    ),
    code: (
      <>
      docker run
      </>
    )
  },
  {
    title: 'Your code, your process',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Share your quality modules securely. Know what you're deploying and react.
      </>
    )
  },
  {
    title: 'Maximise developer experience',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Use modulehub CLI and optimize the time for project setup or local development.
      </>
    )
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
