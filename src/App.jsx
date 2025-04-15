  import React, { useState } from 'react';
  import './App.css';
  import Rate from './component/Rate';
  import Result from './component/result.jsx';

  function App() {
    const [submit, setSubmit] = useState(false);
    const [active, setActive] = useState(null)
    return (
      <>
        {submit === false ? <Rate setSubmit={setSubmit} active={active} setActive={setActive}/> : <Result active={active} />}
      </>
    );
  }

  export default App;
