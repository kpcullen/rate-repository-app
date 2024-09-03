import useCreateReview from '../../hooks/useCreateReview'
import ReviewFormContainer from './ReviewFormContainer'

//mutate logic to be sent as prop

const ReviewForm = () => {
  const createReview = useCreateReview()

  const onSubmit = async (values) => {
    try {
      await createReview(values)
    } catch (e) {
      console.log(e)
    }
  }

  return <ReviewFormContainer onSubmit={onSubmit} />
}

export default ReviewForm
