// Write your code here
import './index.css'

const DestinationItem = props => {
  const {id, name, imgUrl} = props
  return (
    <li>
      <img src={imgUrl} alt="image" />
      <h1>{name}</h1>
    </li>
  )
}
export default DestinationItem
