import React, {useContext} from 'react'
import { RemovingMiddleManContext } from '../Context/RemovingMidlleMan'
const TestingComponent5 = () => {
    let {styling} = useContext(RemovingMiddleManContext);
  return (
    <div style={{color: styling.color, backgroundColor: styling.backgroundColor}}>TestingComponent5</div>
  )
}

export default TestingComponent5