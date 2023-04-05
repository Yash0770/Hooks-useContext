import React, {useContext} from 'react'
import ComponentF from './ComponentF/ComponentF'
import { ChannelContext, UserContext } from '../../App'

function ComponentE(props) {
    const firstContext = useContext(UserContext)
    const sedcondChannel = useContext(ChannelContext)
    const third = useContext(ChannelContext)

    const headingForComponentF ='Heading 3'
  return (
    <div>
        <h1>{props.heading2}</h1>
        First - {firstContext}  second - {sedcondChannel} third - {third}
        <ComponentF heading3={headingForComponentF}/>
    </div>
  )
}

export default ComponentE