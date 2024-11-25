import React from 'react';
import CubeWorld from './components/CubeWorld';
import './styles/normalize.css'
import './styles/index.css';


function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <CubeWorld bgColor='#141622' />
        </div>
    );
}

export default App;