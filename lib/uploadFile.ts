import { supabase } from './supabase-client'
import { browserEnv } from '@/env/browser'

export interface ResData {
  url: string
  originalFilename: string | undefined
  isImg: boolean
  filePath: string
  width?: number
  dpi?: number
}

const parseResData = (
  data: { Key: string } | null,
  isImg: boolean,
  filePath: string
): ResData => {
  const filename = data?.Key.split('/')[2].split('-')[1]
  if (isImg) {
    return {
      url: `${browserEnv.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data?.Key}`,
      originalFilename: filename,
      isImg,
      filePath,
    }
  }
  return {
    url: `${browserEnv.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data?.Key}`,
    originalFilename: filename,
    width: 200,
    dpi: 144,
    isImg,
    filePath,
  }
}

export async function uploadFile(file: File) {
  // const isImg = false
  const isImg = /image/i.test(file.type)
  //supabase storeage

  const timestamp = Math.round(new Date().getTime() / 1000)
  const folderName = isImg ? 'images' : 'files'
  const filename = `${timestamp}-${file.name}`
  const filePath = `${folderName}/${filename}`

  const { data, error } = await supabase.storage
    .from('cheil-post')
    .upload(filePath, file, { upsert: true })

  if (error) {
    throw Error(error.message)
  }

  return parseResData(data, isImg, filePath)
}
