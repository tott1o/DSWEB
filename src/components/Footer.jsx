import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.divider}></div>
                <p style={styles.text}>
                    &copy; 2025 <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Data Structures Lab</span>.
                    Designed for professional-grade learning.
                </p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '40px 0',
        marginTop: 'auto',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
    },
    divider: {
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #E2E8F0, transparent)',
        marginBottom: '32px',
    },
    text: {
        margin: 0,
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontWeight: 400,
    }
};

export default Footer;
