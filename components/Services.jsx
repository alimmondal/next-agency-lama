import React from 'react';
import styles from '../styles/Services.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Services({ services }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What We Can Do?</h1>
      <h1 className={styles.subTitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link href={`/products/${service.name}`} key={service.id} passHref>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`/img/${service.video}`}
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    alt=""
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
