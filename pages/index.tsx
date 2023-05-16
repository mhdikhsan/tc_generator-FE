import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';;




const HomePage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);



    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl(null);
        }
    };

    const handleSendFile = () => {
        if (selectedFile) {
            // Perform your API call or backend processing here
            console.log('Sending file:', selectedFile);

            // Set the loading state
            setIsLoading(true);

            // Simulate a loading delay (replace with actual API call)
            setTimeout(() => {
                // Navigate to the loading scene
                router.push('/LoadingScene');
            }, 2000);
        }
    };


    const formatTitle = (title) => {
        if (title.length > 20) {
            return title.slice(0, 20).toLowerCase() + '...';
        }
        return title.toLowerCase();
    };

    return (
        <div className={`${styles.container} flex items-center justify-center min-h-screen bg-gray-900`}>
            <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-lg">
                <h1 className={styles.title}>
                    {formatTitle('Input Your Code Here')}
                </h1>
                <div className="bg-gray-200 rounded-lg p-6 mb-8">
                    <label
                        htmlFor="fileInput"
                        className="bg-blue-500 text-white px-6 py-3 rounded-md cursor-pointer hover:bg-blue-600 font-sans w-full text-center"
                    >
                        Choose File
                    </label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="fileInput"
                    />
                    {selectedFile && (
                        <div className="border border-gray-300 rounded mt-4 p-4">
                            <p className="mb-1 text-lg font-semibold text-gray-800 font-sans text-center">Selected File:</p>
                            <p className="mb-1 text-gray-800 font-sans text-center">{selectedFile.name}</p>
                            <p className="mb-1 text-gray-800 font-sans text-center">{selectedFile.size} bytes</p>
                            <p className="mb-1 text-gray-800 font-sans text-center">{selectedFile.type}</p>
                            <button
                                onClick={handleSendFile}
                                className="bg-blue-500 text-white px-6 py-3 rounded-md cursor-pointer hover:bg-blue-600 font-sans mt-4 w-full"
                            >
                                Send File
                            </button>
                        </div>
                    )}
                </div>
                <div className="bg-gray-100 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 font-sans mb-2">Supercharge Your Testing Process</h2>
                    <p className="text-gray-600 font-sans mb-4">Unlock the power of automated test case generation. Our cutting-edge tools provide optimized test cases with prioritization modes, ensuring thorough and efficient testing.</p>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    return <HomePage />;
  }