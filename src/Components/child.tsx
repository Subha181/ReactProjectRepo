import React, { useState } from 'react'
import GrandChild from './GrandChild';

function Child() {
  return (
    <div>
      <h1>This is my child component</h1>
      <GrandChild />
    </div>
  );
}
export default Child;

