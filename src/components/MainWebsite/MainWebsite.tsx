import React from 'react';
import styles from './MainWebsite.module.css';
import { MainWebsiteProps } from './types';

// PUBLIC_INTERFACE
const MainWebsite: React.FC<MainWebsiteProps> = ({
    title = 'Welcome to NeuraIT',
    description = 'AI-Powered Website Building Platform'
}) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </header>
            
            <main className={styles.main}>
                <section className={styles.features}>
                    <h2>Features</h2>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <h3>AI-Powered Design</h3>
                            <p>Create beautiful websites with the help of artificial intelligence</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>Responsive Layout</h3>
                            <p>Automatically adapts to any screen size</p>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>Easy Integration</h3>
                            <p>Seamlessly connect with external tools and services</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} NeuraIT. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainWebsite;