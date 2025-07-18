import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import './HomePage.css';
import { Link } from 'react-router-dom';


// Import your images (make sure these paths are correct)
import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.jpg';
import photo6 from '../assets/6.jpg';
import photo7 from '../assets/7.jpg';
import photo8 from '../assets/8.jpg';
import photo9 from '../assets/9.jpg';
import photo10 from '../assets/10.jpg';
import { timelineData } from '../timelineData.js';

// --- HELPER COMPONENT FOR A SINGLE TIMELINE EVENT ---

const TimelineItem = ({ data, index }) => (
  // This logic is for a vertical timeline:
  // Even-indexed items (0, 2, 4...) go on the LEFT.
  // Odd-indexed items (1, 3, 5...) go on the RIGHT.
  <div className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}>
    <div className="timeline-content">
      <time className="timeline-date">{data.date}</time>
      <h3 className="timeline-title">{data.title}</h3>
      <p className="timeline-description">{data.description}</p>
    </div>
  </div>
);
function HomePage() {
  // This slideshow logic is still perfect for the image display
  const slideshowImages = [photo1, photo7,  photo2, photo3, photo4, photo8, photo5, photo6, photo9, photo10,];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slideshowImages.length);
    }, 5000); // 5-second interval

    return () => clearInterval(intervalId);
  }, [slideshowImages.length]);

  return (
    // The component now only returns the Header and the main section
    <>
      <Header />

      {/* Using your new preferred class name: "main-section" */}
      <section className="main-section">
        <div className="main-content">
          
          {/* --- The Left Column (Congratulatory Message) --- */}
          <div className="left-column">
            <p className="main-subtitle">앞으로도 쭉 행복한 연애하자~</p>
            <h1 className="main-title">100일 축하해!!!</h1>
            <p className="main-description">
              
            </p>
            <Link to="/letter" className="letter">
              100일 편지 읽기
            </Link>
            <a href="#timeline" className="letter">
              타임라인 보기
            </a>
          </div>

          {/* --- The Right Column (Image Slideshow) --- */}
          <div className="right-column">
            <div className="slideshow-frame">
              <img 
                key={currentIndex} 
                src={slideshowImages[currentIndex]} 
                alt="A memory of us" 
                className="slideshow-image"
              />
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: The New Timeline Section --- */}
      {/* --- ADD THIS ENTIRE SECTION BELOW THE FIRST ONE --- */}
      <section className="timeline-section" id="timeline">
        <h2 className="section-title">타임라인</h2>
        <div className="timeline-container">
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} index={idx} key={idx} />
          ))}
          
        </div>
      </section>
    </>
  );
}

export default HomePage;