import { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

const App = () => {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('APP_RUNNING');

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]);

    const allowToogleHandler = () => setAllowToggle(true);

    return (
        <div className='app'>
            <h1>Hello World!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToogleHandler}>Allow Toggling!</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
};

export default App;
