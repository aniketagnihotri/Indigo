import React, { useEffect, useState, useRef } from 'react';

Function Popup() }

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="app">
            <button onClick={() => setIsOpen(!isOpen)}>Toggle Modal</button>
            { isOpen ? (
                <div className="modal"><p>Modal is open</p></div>
            ) : null}
            <div className="modal">
                <p>Modal is Open</p>
            </div>
    </div>
    )
}

export default Popup;