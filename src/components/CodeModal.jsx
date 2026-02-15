import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, AnimatePresence } from 'framer-motion';

const CodeModal = ({ isOpen, onClose, codeFile }) => {
    const [codeContent, setCodeContent] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && codeFile) {
            setLoading(true);
            const folder = codeFile.endsWith('.md') ? 'docs' : 'codes';
            fetch(`/${folder}/${codeFile}`)
                .then(res => res.text())
                .then(text => {
                    setCodeContent(text);
                    setLoading(false);
                    if (!codeFile.endsWith('.md')) {
                        setTimeout(() => Prism.highlightAll(), 0);
                    }
                })
                .catch(() => {
                    setLoading(false);
                });
        }
    }, [isOpen, codeFile]);

    const isMarkdown = codeFile?.endsWith('.md');

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={styles.overlay} onClick={onClose}>
                    <motion.div
                        style={styles.modal}
                        onClick={e => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div style={styles.header} className="cycle-header">
                            <div style={styles.headerInfo}>
                                <div style={styles.fileIcon}>{isMarkdown ? "📝" : "📄"}</div>
                                <h3 style={styles.filename}>{codeFile}</h3>
                            </div>
                            <button onClick={onClose} style={styles.closeBtn}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div style={styles.body}>
                            {loading ? (
                                <div style={styles.loader}>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        style={styles.spinner}
                                    />
                                    <p>Fetching content...</p>
                                </div>
                            ) : (
                                <div className="fade-in">
                                    {isMarkdown ? (
                                        <div className="markdown-content" style={styles.markdownWrapper}>
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {codeContent}
                                            </ReactMarkdown>
                                        </div>
                                    ) : (
                                        <div style={styles.codeWrapper}>
                                            <pre style={styles.pre}>
                                                <code className="language-c">{codeContent}</code>
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
    },
    modal: {
        background: '#ffffff',
        width: '100%',
        maxWidth: '1100px',
        height: '100%',
        maxHeight: '850px',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
    header: {
        padding: '24px 32px',
        borderBottom: '1px solid #F1F5F9',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#ffffff',
    },
    headerInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    fileIcon: {
        fontSize: '1.2rem',
    },
    filename: {
        margin: 0,
        fontSize: '1.25rem',
        color: 'var(--text-primary)',
        fontWeight: 700,
        letterSpacing: '-0.5px',
    },
    closeBtn: {
        background: '#F1F5F9',
        border: 'none',
        color: 'var(--text-secondary)',
        width: '36px',
        height: '36px',
        borderRadius: '10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s',
    },
    body: {
        padding: '0',
        overflowY: 'auto',
        textAlign: 'left',
        background: '#ffffff',
        flex: 1,
    },
    markdownWrapper: {
        padding: '24px 20px',
        maxWidth: '900px',
        margin: '0 auto',
    },
    codeWrapper: {
        background: '#1e1e1e',
        minHeight: '100%',
    },
    pre: {
        margin: 0,
        padding: '20px',
        fontSize: '0.9rem',
        fontFamily: '"Fira Code", "Cascadia Code", monospace',
    },
    loader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: '16px',
        color: 'var(--text-secondary)',
    },
    spinner: {
        width: '40px',
        height: '40px',
        border: '3px solid #F1F5F9',
        borderTop: '3px solid var(--primary)',
        borderRadius: '50%',
    }
};

export default CodeModal;
