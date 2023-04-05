import React from 'react'
import { UserContext, ChannelContext } from '../../../App'

function ComponentF(props) {
  return (
    <div>
        <UserContext>
            {
                user=>{
                    return(
                        <ChannelContext>
                            {
                                secondValue =>{
                                    return (<div>
                                                <p> UserContex value is <b>{user}</b>  and Channel Context value is <b>{secondValue}</b>  </p>
                                            </div>)
                                }
                            }
                        </ChannelContext>
                    )
                }
            }
        </UserContext>

        <h1>{props.heading3}</h1>
    </div>
  )
}

export default ComponentF