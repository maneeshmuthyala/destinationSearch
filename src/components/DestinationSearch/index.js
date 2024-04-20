// Write your code here
import './components/DestinationItem'
import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  return (
    <div className="cont">
      <h1 className="header">Destination Search</h1>
      <input type="search" className="inp" placeholder="Search.." />
      <ul>
        {userDetailsList.map(eachItem => (
          <DestinationItem destinationsList={eachItem} />
        ))}
      </ul>
    </div>
  )
}
export default DestinationSearch
