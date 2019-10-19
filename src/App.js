import React from 'react'

import NavBar from './components/navbar'

const avatarUrl = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
const userName = 'Jane Doe'

const App = () => {
  return (
    <div className="App">
      <NavBar avatarUrl={avatarUrl} userName={userName} />
    </div>
  )
}

export default App
