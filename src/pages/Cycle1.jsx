import React, { useState } from 'react';
import CodeCard from '../components/CodeCard';
import CodeModal from '../components/CodeModal';
import { motion } from 'framer-motion';

const Cycle1 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleViewCode = (file) => {
        setSelectedFile(file);
        setModalOpen(true);
    };

    const questions = [
        {
            title: "1. Linear Search",
            description: "Write a program to perform Linear search on n numbers using a function and call it from main().",
            codeFile: "algo.md"
        },
        {
            title: "2. Polynomial Addition",
            description: "Implement Polynomial in one variable using Structure and perform addition of two polynomials.",
            codeFile: "q1plynomial.c",
            extraActions: [{ label: 'View Algorithm', file: 'polynomial.md' }]
        },
        {
            title: "3. Sparse Matrix",
            description: "Represent Sparse Matrices using arrays. Implement addition and Transpose of a Sparse Matrix.",
        },
        {
            title: "4. Stack Operations",
            description: "Implement a Menu driven program for Stack operations: Pushing, Popping, and Displaying using Arrays.",
            codeFile: "q9.c",
            extraActions: [{ label: 'View Algorithm', file: 'stack.md' }]
        },
        {
            title: "5. Queue Operations",
            description: "Implement a Menu driven program for Queue operations: Inserting, Deleting, and Displaying using Arrays.",
            extraActions: [{ label: 'View Algorithm', file: 'queue.md' }]
        },
        {
            title: "6. Circular Queue",
            description: "Implement a Menu driven program for Circular Queue operations using Arrays.",
            extraActions: [{ label: 'View Algorithm', file: 'queue.md' }]
        },
        {
            title: "7. Stack Applications",
            description: "Implement Infix to Postfix conversion and Postfix Expression evaluation.",
            codeFile: "q7.c",
            extraActions: [{ label: 'View Algorithm', file: 'stack.md' }]
        }
    ];

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div style={styles.header} className="cycle-header">
                    <div>
                        <h2 style={styles.heading}>Cycle 01</h2>
                        <p style={styles.description}>Linear Data Structures & Static Implementations.</p>
                    </div>
                    <a href="/pdfs/DSLab_Cycle1[1].pdf" target="_blank" style={styles.pdfBtn}>
                        <span style={{ marginRight: '8px' }}>📄</span> Full Questions PDF
                    </a>
                </div>

                <div style={styles.grid}>
                    {questions.map((q, index) => (
                        <div key={index}>
                            <CodeCard
                                {...q}
                                onView={handleViewCode}
                                onExtraView={handleViewCode}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
            <CodeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} codeFile={selectedFile} />
        </>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '48px',
        borderBottom: '1px solid #E2E8F0',
        paddingBottom: '24px',
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: 800,
        color: 'var(--text-primary)',
        margin: '0 0 4px 0',
        letterSpacing: '-1px',
    },
    description: {
        color: 'var(--text-secondary)',
        margin: 0,
        fontSize: '1.1rem',
    },
    pdfBtn: {
        padding: '12px 24px',
        background: 'white',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        borderRadius: '12px',
        fontSize: '0.9rem',
        fontWeight: 600,
        border: '1px solid #E2E8F0',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        alignItems: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '30px'
    }
};

export default Cycle1;
