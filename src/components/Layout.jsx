import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={styles.wrapper}>
            {/* Mesh Gradient Background */}
            <div style={styles.meshBg}></div>

            <div style={styles.layout}>
                <Header />
                <main style={styles.main}>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        position: 'relative',
        minHeight: '100vh',
        background: '#F8FAFC',
        overflowX: 'hidden',
    },
    meshBg: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundImage: `
      radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.05) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(6, 182, 212, 0.05) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(244, 63, 94, 0.03) 0px, transparent 50%),
      radial-gradient(at 0% 100%, rgba(79, 70, 229, 0.05) 0px, transparent 50%)
    `,
    },
    layout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: '20px',
    },
    main: {
        flex: 1,
        width: '100%',
        maxWidth: '1100px',
        margin: '40px auto',
        padding: '0 20px',
    }
};

export default Layout;
