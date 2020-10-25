import Api from './api'

const RatingService = {
  create: (store, rating) => Api.post('/rating', { store: store, rating: rating}),
}

export default RatingService