import React from 'react';
import { motion } from 'framer-motion';

const CodeCard = ({ title, description, codeFile, onView, isPdf, extraActions, onExtraView }) => {
    return (
        <motion.li
            style={styles.card}
            whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="premium-card"
        >
            <div style={styles.content}>
                <div style={styles.cardHeader}>
                    <div style={styles.iconBox}>
                        {isPdf ? "📄" : "💻"}
                    </div>
                    <span style={styles.title}>{title}</span>
                </div>
                {description && <p style={styles.description}>{description}</p>}
            </div>

            <div style={styles.actions}>
                {isPdf ? (
                    <a href={`/pdfs/${codeFile}`} target="_blank" rel="noopener noreferrer" style={styles.primaryBtn}>
                        View PDF
                    </a>
                ) : (
                    <>
                        {codeFile && (
                            <>
                                <button onClick={() => onView(codeFile)} style={styles.primaryBtn}>
                                    {codeFile.endsWith('.md') ? 'Read Algorithm' : 'View Code'}
                                </button>
                                {!codeFile.endsWith('.md') && (
                                    <a href={`/codes/${codeFile}`} download style={styles.secondaryBtn}>
                                        Download
                                    </a>
                                )}
                            </>
                        )}
                        {extraActions && extraActions.map((action, idx) => (
                            <button key={idx} onClick={() => onExtraView(action.file)} style={styles.accentBtn}>
                                {action.label}
                            </button>
                        ))}
                    </>
                )}
            </div>
        </motion.li>
    );
};

const styles = {
    card: {
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '24px',
        height: '100%',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '12px',
    },
    iconBox: {
        width: '40px',
        height: '40px',
        background: 'rgba(79, 70, 229, 0.08)',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
    },
    content: {
        flex: 1,
    },
    title: {
        fontWeight: 700,
        fontSize: '1.15rem',
        color: 'var(--text-primary)',
        letterSpacing: '-0.3px',
    },
    description: {
        fontSize: '0.95rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.55,
        margin: 0,
    },
    actions: {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
    },
    primaryBtn: {
        background: 'var(--grad-indigo)',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 600,
        padding: '10px 20px',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.9rem',
        boxShadow: '0 4px 12px var(--primary-glow)',
        transition: 'transform 0.2s',
    },
    secondaryBtn: {
        background: '#F1F5F9',
        color: '#475569',
        textDecoration: 'none',
        fontWeight: 600,
        padding: '10px 20px',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.9rem',
        transition: 'background 0.2s',
    },
    accentBtn: {
        background: 'rgba(6, 182, 212, 0.1)',
        color: '#0891B2',
        textDecoration: 'none',
        fontWeight: 600,
        padding: '10px 20px',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid rgba(6, 182, 212, 0.2)',
        cursor: 'pointer',
        fontSize: '0.9rem',
        transition: 'background 0.2s',
    }
};

export default CodeCard;
