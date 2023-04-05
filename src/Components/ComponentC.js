import React from 'react'
import ComponentE from './ComponentE/ComponentE'
// import ComponentF from './ComponentE/ComponentF/ComponentF'

function ComponentC() {
    const headingForComponentE = 'Heading 2'
  return (
    <div>
        <h1>Heading 1</h1>
        <ComponentE
           heading2 = {headingForComponentE}
        />
    </div>
  )
}

export default ComponentC