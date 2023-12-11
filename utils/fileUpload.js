import axios from 'axios'
import { notifyError } from 'components/toast'
import { getSimplifiedError } from './error'

export const uploadNewFile = async (file, setProgress, setUploading, result) => {
  const CLOUDINARY_CLOUD_NAME = 'godfadatun'
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/godfadatun/upload'
  const CLOUDINARY_API_KEY = '779285242679366'
  const CLOUDINARY_PRESET = 'zxhjm3uc'
  try {
    const couldUrl = CLOUDINARY_URL
    const preset = CLOUDINARY_PRESET

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)
    data.append('cloud_name', CLOUDINARY_CLOUD_NAME)
    const response = await axios.post(couldUrl, data, {
      onUploadProgress: (progressEvent) => {
        setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total))
      },
      headers: { 'Content-Type': file?.type },
    })
    setProgress(100)
    result({
      response,
      url: response.data.secure_url,
      fileName: response.data.original_filename,
    })

    setTimeout(() => {
      setUploading(false)
    }, 0)
  } catch (error) {
    notifyError('File Upload Failed', getSimplifiedError(error))
    return 'error'
  }
}
