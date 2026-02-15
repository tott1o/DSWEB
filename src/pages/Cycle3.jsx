import React, { useState } from 'react';
import CodeCard from '../components/CodeCard';
import CodeModal from '../components/CodeModal';
import { motion } from 'framer-motion';

const Cycle3 = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleViewCode = (file) => {
        setSelectedFile(file);
        setModalOpen(true);
    };

    const questions = [
        {
            title: "14. Binary Search Tree",
            description: "Operations on BST: Insert, Delete, Search, and Inorder Display.",
            extraActions: [{ label: 'Read Algorithm', file: 'lab3.md' }]
        },
        {
            title: "15. Tree Traversals",
            description: "Perform Inorder, Preorder, and Postorder traversals on a Binary Tree.",
            extraActions: [{ label: 'Read Algorithm', file: 'lab3.md' }]
        },
        {
            title: "16. Graph Traversals",
            description: "Store graph using Adjacency Lists and perform BFS and DFS.",
            extraActions: [{ label: 'Read Algorithm', file: 'lab3.md' }]
        },
        {
            title: "17. Sorting Basics",
            description: "Implement Selection Sort, Bubble Sort, and Insertion Sort.",
            extraActions: [{ label: 'Read Algorithm', file: 'lab3.md' }]
        },
        {
            title: "18. Merge Sort",
            description: "Implement the Divide and Conquer Merge Sort algorithm.",
            extraActions: [{ label: 'Read Algorithm', file: 'lab3.md' }]
        },
        {
            title: "19. Quick Sort",
            description: "Implement the Partition-based Quick Sort algorithm.",
            codeFile: "q10.c",
            extraActions: [{ label: 'Read Algorithm', file: 'lab3.md' }]
        },
        {
            title: "20. Binary Search",
            description: "Iterative and Recursive implementations of Binary search.",
            extraActions: [{ label: 'Read Algorithm', file: 'lab3.md' }]
        }
    ];

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div style={styles.header} className="cycle-header">
                    <div>
                        <h2 style={styles.heading}>Cycle 03</h2>
                        <p style={styles.description}>Non-Linear Structures & Advanced Algorithms.</p>
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

export default Cycle3;
