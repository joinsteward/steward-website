const getError = (error) => {
  if (!Object.keys(error).length || typeof error === 'string') return error
  let errors = []
  if (Array.isArray(error) && error.length) {
    errors = [error[0].error, ...error]
  } else {
    Object.keys(error).forEach((e) => {
      return (errors = [...errors, error[e]])
    })
  }

  return errors.filter((e) => e)
}

const getErrors = (errorResponse) => {
  if (errorResponse?.error || errorResponse?.data?.error)
    return errorResponse.error || errorResponse.data.error
  let errors = []
  Object.keys(errorResponse).forEach((error) => {
    return (errors = [...errors, ...getError(errorResponse[error])])
  })
  return errors
}

export const getSimplifiedError = (error) => {
  if (error.response?.status === 500) return 'Sorry an unexpected error occurred.'
  const errorResponse = error.response && error.response.data

  if (!errorResponse) {
    return 'Something went wrong, please try again later'
  } else if (error.response.status === 406) {
    return getErrors(error.response)
  }
  return getErrors(errorResponse)
}
