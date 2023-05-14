import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';


const LoadingScene = () => {
  const router = useRouter();
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const simulateLoading = async () => {
      try {
        // Simulating loading delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulate an error
        throw new Error('Loading Error');
        
        setLoadingComplete(true);
      } catch (error) {
        console.error(error);
        router.push('/ResultPage');
      }
    };

    simulateLoading();
  }, [router]);

  useEffect(() => {
    if (isLoadingComplete) {
      router.push('/ResultPage');
    }
  }, [isLoadingComplete, router]);

  return (
    <div className={styles['loading-scene']}>
      <div className={styles['loading-spinner']}></div>
    </div>
  );
  
};

export default LoadingScene;
