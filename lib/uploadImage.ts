import { supabase } from './supabase-client'
import { browserEnv } from '@/env/browser'

export async function uploadImage(file: File) {
  // const signResponse = await fetch('/api/sign-cloudinary', { method: 'POST' })
  // const signData = await signResponse.json()
  // const formData = new FormData()

  // formData.append('file', file)
  // formData.append('api_key', signData.apiKey)
  // formData.append('timestamp', signData.timestamp)
  // formData.append('signature', signData.signature)
  // formData.append('folder', signData.folder)
  // formData.append('image_metadata', 'true')

  // const response = await fetch(
  //   `https://api.cloudinary.com/v1_1/${signData.cloudName}/image/upload`,
  //   {
  //     method: 'POST',
  //     body: formData,
  //   }
  // )
  // const dataCloudinary = await response.json()

  //supabase storeage
  const imagePath = `image/${file.name}`
  const { data, error } = await supabase.storage
    .from('cheil-post')
    .upload(imagePath, file, { upsert: true })

  if (error) {
    throw Error(error.message)
  }

  console.log('uploaded image', data)

  const parseData = {
    url: `${browserEnv.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data?.Key}`,
    originalFilename: 'original_filename',
    width: 200,
    dpi: 144,
  }
  return parseData

  // return {
  //   url: data.secure_url as string,
  //   originalFilename: data.original_filename as string,
  //   width: data.width as number,
  //   dpi: Number(data.image_metadata.DPI),
  // }
}
