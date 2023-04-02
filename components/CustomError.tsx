import HTTPStatus from 'http-status'

const CustomError = ({ code }: any) => {
  const title: any =
    code === 404
      ? 'This page could not be found'
      : HTTPStatus[code] || 'An unexpected error has occurred'

  return <div>{title}</div>
}

export default CustomError