import React from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

const ResultPage = () => {
    const router = useRouter();
    const { result } = router.query;


    const handleGoHome = () => {
        router.push('/');
      };
    const handleDownload = () => {
        // Replace 'your-test-case.doc' with the actual filename of your test case
        const filename = 'your-test-case.doc';
        const downloadLink = document.createElement('a');
        downloadLink.href = result;
        downloadLink.download = filename;
        downloadLink.click();
    };

    return (
        <div className={`${styles.container} flex items-center justify-center min-h-screen bg-gray-900`}>
            <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
                <h1 className={styles.title}>Test Case Generated</h1>
                <div className="bg-gray-200 rounded-lg p-6 mb-8">
                    <p className="text-gray-800 font-sans">
                        Your test case has been generated successfully. Click the button below to download the test case file.
                    </p>
                    <div className={styles.buttonGroup}>
                        <button
                            onClick={handleDownload}
                            className={styles.button}
                        >
                            Download Test Case
                        </button>
                        <button
                            onClick={handleGoHome}
                            className={styles.button}
                        >
                            Go Back
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResultPage;
