import React, { useState } from 'react';
import CodeCard from '../components/CodeCard';
import CodeModal from '../components/CodeModal';
import { motion } from 'framer-motion';

const Cycle2 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleViewCode = (file) => {
        setSelectedFile(file);
        setModalOpen(true);
    };

    const questions = [
        {
            title: "8. Singly Linked List",
            description: "Menu driven program for SLL: Insertion (begin, end, sorted), Count, Reverse, and Deletion."
        },
        {
            title: "9. Doubly Linked List",
            description: "Menu driven program for DLL: Insertion (begin, end, sorted), Count, Reverse, and Deletion."
        },
        {
            title: "10. Circular Linked List",
            description: "Menu driven program for Circular SLL: Insertion and Deletion at both ends."
        },
        {
            title: "11. Stack (Linked List)",
            description: "Implement a Stack Data Structure using Singly Linked List operations.",
            codeFile: "q11stackusinglinkedlist.c",
            extraActions: [{ label: 'Read Algorithm', file: 'lab2.md' }]
        },
        {
            title: "12. Queue (Circular LL)",
            description: "Implement a Queue Data Structure using a Circular Singly Linked List.",
            codeFile: "q12queueusingcircularlinkedlist.c",
            extraActions: [{ label: 'Read Algorithm', file: 'lab2.md' }]
        },
        {
            title: "13. Polynomials (LL)",
            description: "Implement polynomial addition and multiplication in one variable using Linked Lists.",
            codeFile: "q13polynomialapplicationlinkedlist.c",
            extraActions: [{ label: 'Read Algorithm', file: 'lab2.md' }]
        }
    ];

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div style={styles.header} className="cycle-header">
                    <div>
                        <h2 style={styles.heading}>Cycle 02</h2>
                        <p style={styles.description}>Dynamic Memory & Linked Implementations.</p>
                    </div>
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
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '30px'
    }
};

export default Cycle2;
