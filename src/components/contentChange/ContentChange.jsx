'use client'
import React, { useState, useEffect } from 'react';
import styles from './ContentChange.module.css'

const ContentChanger = () => {
  const [content, setContent] = useState('المطاعم');

  useEffect(() => {
    // Update the content every second
    const interval = setInterval(() => {
      setContent((prevContent) => (prevContent === 'المطاعم' ? 'الكافيهات' : 'المطاعم'));
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return <span className="indexTitleSpan">{content}</span>;
};

const ContentChange = () => {
  return (
    <div className={styles.container}>

        <div className='z-50 text-[12vw] lg:text-9xl'>
             <h1>الكثير من <ContentChanger /></h1>
        </div>
        
        
    </div>
  );
};

export default ContentChange;
