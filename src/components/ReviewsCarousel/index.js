// Write your code here
import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList} = props
  const {imgUrl, username, companyName, description} = reviewsList
  return (
    <div>
      <img src={imgUrl} alt="" className="image" />
      <h1 className="heading">{username}</h1>
      <p className="para">{companyName}</p>
      <p className="despecrition">{description}</p>
    </div>
  )
}
export default ReviewsCarousel
