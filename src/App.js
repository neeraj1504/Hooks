import React, { useState } from 'react';
import './App.css';
import Background_change from './Components/Background_cahnge';
import Color from './Components/Color';
import image1 from './Components/1.jpg';
import image2 from './Components/2.jpg';
import image3 from './Components/3.jpg';
import image4 from './Components/4.jpg';

function App() {
  const [index, setIndex] = useState(0);

  const images = [image1, image2, image3, image4];
  const colors = ['#1b93e3', '#fab2f3', '#3e8873', '#d6b7ee'];

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <Background_change image={images[index]} />
          <Color color={colors[index]} /> 
        </div>
        <button className="button" onClick={handleClick}>
          Click Me To Change Color and Image
        </button>
      </div>
    </div>
  );
}

export default App;