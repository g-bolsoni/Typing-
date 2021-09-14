import React from 'react'

const  App = () => {
    return (
        <div className='container'>
            <div className="valid-keys">
                <span className="matched">giov</span>
                <span className="remainder">ane</span>
            </div>
            <div className="typed-keys">alofnaolfngiovdssg</div>
            <div className="completed-words">
                <ol>
                    <li>cidade</li>
                    <li>proffisional</li>
                    <li>casa</li>
                    <li>moradia</li>
                    <li>lar</li>
                </ol>
            </div>
        </div>
    )
}
export default App;