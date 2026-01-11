import React, { useState } from 'react'
import Header from './components/Header'
import CountDisplay from './components/CountDisplay'
import GoalList from './components/GoalList'

function App() {
    const [count, setCount] = useState(0)
    console.log('App component rendered');

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <Header color="brown" />
            <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>

                <CountDisplay count={count} />
                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>

            </div>
            <GoalList />
        </div>
    )
}

export default App
