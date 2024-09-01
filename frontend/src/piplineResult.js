import React from 'react';

const PipelineResult = ({ result }) => {
    if (!result) return null; // Don't render anything if there's no result yet

    return (
        <div style={styles.container}>
            <h2>Pipeline Analysis Result</h2>
            <p><strong>Number of nodes:</strong> {result.num_nodes}</p>
            <p><strong>Number of edges:</strong> {result.num_edges}</p>
            <p><strong>Is DAG:</strong> {result.is_dag ? 'Yes' : 'No'}</p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        maxWidth: '400px',
        margin: '20px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default PipelineResult;
