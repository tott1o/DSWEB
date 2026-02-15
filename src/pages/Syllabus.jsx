import React from 'react';
import { motion } from 'framer-motion';

const Syllabus = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div style={styles.header}>
                <h2 style={styles.heading}>Course Syllabus</h2>
                <p style={styles.description}>Official curriculum for PCCSL307 - Data Structures Laboratory.</p>
            </div>

            <div style={styles.grid} className="responsive-grid">
                <div style={styles.mainContent}>
                    <section style={styles.section} className="premium-card">
                        <h3 style={styles.subHeading}>Introduction</h3>
                        <p style={styles.text}>To give practical experience for learners on implementing different linear and non linear data structures, and algorithms for searching and sorting.</p>
                    </section>

                    <section style={styles.section} className="premium-card">
                        <h3 style={styles.subHeading}>Experiments</h3>
                        <div style={styles.tableWrapper}>
                            <table style={styles.table}>
                                <thead>
                                    <tr>
                                        <th style={styles.th}>No.</th>
                                        <th style={styles.th}>Module / Experiment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        "Find the sum of two sparse polynomials using arrays",
                                        "Find the transpose of a sparse matrix and sum of two sparse matrices.",
                                        "Convert infix expression to postfix (or prefix) and then evaluate using stack,",
                                        "Implement Queue, DEQUEUE, and Circular Queue using arrays.",
                                        "Implement backward and forward navigation of visited web pages in a web browser",
                                        "Implement addition and multiplication of polynomials using singly linked lists.",
                                        "Create a binary tree for arithmetic expression and find prefix / postfix equivalent.",
                                        "Implement a dictionary of word-meaning pairs using binary search trees.",
                                        "Find the shortest distance of every cell from a landmine inside a maze.",
                                        "Three containers (10L, 7L, 4L) pouring problem (Graph Theory)",
                                        "Implement the find and replace feature in a text editor.",
                                        "Given an array of sorted items, implement Binary Search.",
                                        "Sorting Comparison (Bubble, Insertion, Radix, Quick, Merge)",
                                        "Post office preference sequence generation",
                                        "Spell checker using a hash table",
                                        "Memory allocator and garbage collector simulation",
                                        "Tech fest activity points optimization",
                                        "Merge K sorted lists using a heap."
                                    ].map((exp, index) => (
                                        <tr key={index}>
                                            <td style={styles.td}>{index + 1}</td>
                                            <td style={styles.td}>{exp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>

                <aside style={styles.sidebar}>
                    <div style={styles.assessmentCard} className="premium-card">
                        <h4 style={styles.assessmentHeading}>Assessment</h4>
                        <div style={styles.assessmentItem}>
                            <span>Internals (CIE)</span>
                            <strong style={{ color: 'var(--primary)' }}>50 Marks</strong>
                        </div>
                        <div style={styles.assessmentItem}>
                            <span>Final Exam (ESE)</span>
                            <strong style={{ color: 'var(--secondary)' }}>50 Marks</strong>
                        </div>
                        <div style={styles.divider}></div>
                        <a href="/pdfs/ktusyllubus.pdf" target="_blank" style={styles.pdfBtn}>
                            Download Source PDF
                        </a>
                    </div>

                    <div style={{ ...styles.assessmentCard, marginTop: '24px' }} className="premium-card">
                        <h4 style={styles.assessmentHeading}>Resources</h4>
                        <ul style={styles.resourceList}>
                            <li><a href="https://nptel.ac.in/courses/106102064" target="_blank" rel="noreferrer" style={styles.resourceLink}>NPTEL Course</a></li>
                            <li><a href="https://ocw.mit.edu/courses/6-851-advanced-data-structures-spring-2012/" target="_blank" rel="noreferrer" style={styles.resourceLink}>MIT Courseware</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </motion.div>
    );
};

const styles = {
    header: {
        marginBottom: '48px',
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: 800,
        color: 'var(--text-primary)',
        margin: '0 0 8px 0',
        letterSpacing: '-1px',
    },
    description: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        margin: 0,
    },
    grid: {
        gap: '40px',
        alignItems: 'start',
    },
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
    },
    section: {
        padding: '40px',
        background: 'white',
    },
    subHeading: {
        fontSize: '1.4rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    text: {
        lineHeight: 1.7,
        color: 'var(--text-secondary)',
        fontSize: '1rem',
        margin: 0,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        textAlign: 'left',
        padding: '16px 20px',
        background: '#F8FAFC',
        color: 'var(--text-secondary)',
        fontSize: '0.85rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        borderBottom: '2px solid #F1F5F9',
    },
    td: {
        padding: '16px 20px',
        borderBottom: '1px solid #F1F5F9',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
    },
    sidebar: {
        position: 'sticky',
        top: '120px',
    },
    assessmentCard: {
        padding: '32px',
    },
    assessmentHeading: {
        fontSize: '1.2rem',
        fontWeight: 700,
        marginBottom: '24px',
        color: 'var(--text-primary)',
    },
    assessmentItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        fontSize: '0.95rem',
    },
    divider: {
        height: '1px',
        background: '#F1F5F9',
        margin: '24px 0',
    },
    pdfBtn: {
        display: 'block',
        textAlign: 'center',
        padding: '12px',
        background: 'var(--grad-indigo)',
        color: 'white',
        borderRadius: '12px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '0.95rem',
        boxShadow: '0 4px 12px var(--primary-glow)',
    },
    resourceList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    resourceLink: {
        color: 'var(--primary)',
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '0.95rem',
        '&:hover': {
            textDecoration: 'underline',
        }
    }
};

export default Syllabus;
