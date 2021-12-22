import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'UI',
    src: require('../../static/img/ui-state-create.gif').default,
    description: (
      <>
        Just connect your organization and start serving modules in no time. <br/>
      </>
    ),
    link: (
      <>
        <Link
            className="button button--primary button--lg"
            to="https://app.modulehub.io/">
            Get Started
          </Link>
      </>
    )
  },
  {
    title: 'CLI',
    src: require('../../static/img/cli-states-create-list.gif').default,
    description: (
      <>
        Login and create your first state.
      </>
    ),
    link: (
      <>
        <Link
            className="button button--primary button--lg"
            to="/docs/command-line/quickstart">
            Get Started
          </Link>
      </>
    )
  },
];

function Feature({src, title, description, link}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div className="text--center">
          <img src={src} alt={title} />
        </div>
        <p>{description}</p>
        {link}
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
