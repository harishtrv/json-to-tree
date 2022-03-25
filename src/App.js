import React, { useState } from 'react';
import TreeRenderer from './TreeRenderer';
import data from './JSON.json';


export default function App() {
  const [treeJson, setTreeJson] = useState(data);
  const [value, setValue] = useState('');
  const setTreeValue = e => {
    e.preventDefault();
    let newValue = JSON.parse(value);
    setTreeJson([newValue]);
    setValue('');
  }
  return (
    <div style={{ margin: '20px' }}>
      <form onSubmit={setTreeValue}>
        Enter JSON Tree [with properties -> (companyname: string, badge: color, childCompany: array of same object)]:
      <br />
        <textarea rows="10" cols="100" placeholder='Enter Json' onChange={e => setValue(e.target.value)}></textarea>
        <br />
        <button style={{padding:'10px', margin:'10px'}}> Submit</button>
      </form>
      <TreeRenderer data={treeJson} />
    </div>
  );
}
