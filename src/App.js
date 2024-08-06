import {Component} from 'react'
import ReviewsCarousel from './components/ReviewsCarousel'

import './App.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class App extends Component {
  state = {currentIndex: 0}

  onChangeProfile = direction => {
    this.setState(prevState => {
      const {currentIndex} = prevState
      let newIndex
      if (direction === 'left') {
        newIndex =
          currentIndex === 0 ? reviewsList.length - 1 : currentIndex - 1
      } else {
        newIndex =
          currentIndex === reviewsList.length - 1 ? 0 : currentIndex + 1
      }
      return {currentIndex: newIndex}
    })
  }

  render() {
    const {currentIndex} = this.state
    return (
      <div className="app-container">
        <h1>Reviews</h1>
        <div className="sub-container">
          <button
            type="button"
            className="left-button"
            onClick={() => this.onChangeProfile('left')}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt=""
            />
          </button>

          <div className="chage-container">
            <ReviewsCarousel reviewsList={reviewsList[currentIndex]} />
          </div>

          <button
            type="button"
            className="left-button "
            onClick={() => this.onChangeProfile('right')}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt=""
            />
          </button>
        </div>
      </div>
    )
  }
}
export default App
