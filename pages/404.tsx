import CustomError from '@app/components/CustomError'

const NotFound = () => {
  return (
    <>
      <CustomError code={404} />
    </>
  )
}

export default NotFound
