import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Quick setup',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Just connect your organization and start serving modules in no time.
      </>
    ),
    code: (
      <>
      docker run
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
