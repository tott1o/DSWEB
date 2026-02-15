import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Syllabus', path: '/syllabus' },
        { name: 'Cycle 1', path: '/cycle1' },
        { name: 'Cycle 2', path: '/cycle2' },
        { name: 'Cycle 3', path: '/cycle3' },
    ];

    return (
        <header style={styles.header}>
            <div style={styles.container} className="glass">
                <div style={styles.logoContainer}>
                    <Link to="/" style={styles.logoLink}>
                        <span style={styles.logoText}>DS</span>
                        <h1 style={styles.title}>Lab</h1>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav style={styles.desktopNav} className="hide-mobile">
                    <ul style={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.name} style={styles.navItem}>
                                <Link
                                    to={link.path}
                                    style={{
                                        ...styles.link,
                                        ...(location.pathname === link.path ? styles.activeLink : {})
                                    }}
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            style={styles.underline}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                {/* Mobile Menu Button */}
                <button style={styles.menuButton} onClick={() => setIsOpen(!isOpen)} className="show-mobile">
                    <div style={{ ...styles.hamburgerLine, transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
                    <div style={{ ...styles.hamburgerLine, opacity: isOpen ? 0 : 1 }}></div>
                    <div style={{ ...styles.hamburgerLine, transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={styles.mobileNav}
                        className="glass"
                    >
                        <ul style={styles.mobileNavList}>
                            {navLinks.map((link) => (
                                <li key={link.name} style={styles.mobileNavItem}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            ...styles.mobileLink,
                                            ...(location.pathname === link.path ? styles.activeMobileLink : {})
                                        }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

const styles = {
    header: {
        position: 'sticky',
        top: '20px',
        zIndex: 1000,
        width: '100%',
        padding: '0 20px',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '12px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '24px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logoLink: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    logoText: {
        background: 'var(--grad-indigo)',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '8px',
        fontWeight: 800,
        fontSize: '1.2rem',
    },
    title: {
        margin: 0,
        fontSize: '1.4rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        letterSpacing: '-0.5px',
    },
    desktopNav: {
        display: 'block',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        gap: '32px',
        margin: 0,
        padding: 0,
    },
    navItem: {
        position: 'relative',
    },
    link: {
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '0.95rem',
        transition: 'color 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    activeLink: {
        color: 'var(--primary)',
        fontWeight: 600,
    },
    underline: {
        position: 'absolute',
        bottom: '-12px',
        height: '2px',
        width: '100%',
        background: 'var(--primary)',
        borderRadius: '2px',
    },
    menuButton: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'none', // Shown via media queries in index.css or simple hidden logic
        flexDirection: 'column',
        gap: '6px',
        padding: '8px',
    },
    hamburgerLine: {
        width: '24px',
        height: '2px',
        backgroundColor: 'var(--text-primary)',
        transition: 'all 0.3s',
    },
    mobileNav: {
        marginTop: '10px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
    },
    mobileNavList: {
        listStyle: 'none',
        padding: '10px 0',
        margin: 0,
    },
    mobileNavItem: {
        borderBottom: '1px solid rgba(0,0,0,0.05)',
    },
    mobileLink: {
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        fontSize: '1rem',
        display: 'block',
        padding: '15px 30px',
        fontWeight: 500,
    },
    activeMobileLink: {
        color: 'var(--primary)',
        background: 'rgba(79, 70, 229, 0.05)',
        fontWeight: 600,
    }
};

export default Header;
