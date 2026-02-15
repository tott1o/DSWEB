import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={styles.hero}
        >
            <div style={styles.badge} className="fade-in">Data Structures & Algorithms</div>
            <h2 style={styles.heading}>
                Data Structures &  <span style={styles.highlight}> Algorithms.</span>
            </h2>
            <p style={styles.subtext}>
                Documentation, implementations, and theoretical algorithms for the PCCSL307 Data Structures Lab.
            </p>

            <div style={styles.stats}>
                <div style={styles.statItem}>
                    <span style={styles.statValue}>20+</span>
                    <span style={styles.statLabel}>Programs</span>
                </div>
                <div style={styles.divider} className="hide-mobile"></div>
                <div style={styles.statItem}>
                    <span style={styles.statValue}>3</span>
                    <span style={styles.statLabel}>Cycles</span>
                </div>
                <div style={styles.divider} className="hide-mobile"></div>
                <div style={styles.statItem}>
                    <span style={styles.statValue}>Full</span>
                    <span style={styles.statLabel}>Syllabus</span>
                </div>
            </div>
        </motion.div>
    );
};

const styles = {
    hero: {
        padding: '80px 0',
        textAlign: 'left',
    },
    badge: {
        display: 'inline-block',
        padding: '6px 16px',
        background: 'rgba(79, 70, 229, 0.08)',
        color: 'var(--primary)',
        borderRadius: '100px',
        fontSize: '0.85rem',
        fontWeight: 600,
        marginBottom: '24px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
    },
    heading: {
        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
        lineHeight: 1.1,
        margin: '0 0 24px 0',
        color: 'var(--text-primary)',
        fontWeight: 800,
        maxWidth: '800px',
        letterSpacing: '-1.5px',
    },
    highlight: {
        background: 'var(--grad-indigo)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    subtext: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        lineHeight: 1.6,
        margin: '0 0 48px 0',
        fontWeight: 400,
    },
    stats: {
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
    },
    statValue: {
        fontSize: '1.8rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
    },
    statLabel: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontWeight: 500,
    },
    divider: {
        width: '1px',
        height: '40px',
        background: '#E2E8F0',
    }
};

export default Home;
