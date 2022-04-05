import { supabase } from './supabase-client'
import { browserEnv } from '@/env/browser'

export async function uploadFile(file: File) {
  const isImg = /image/i.test(file.type)
  console.log(isImg)
  //supabase storeage

  const timestamp = Math.round(new Date().getTime() / 1000)
  const folderName = isImg ? 'images' : 'files'
  const filePath = `${folderName}/${timestamp}-${file.name}`

  const { data, error } = await supabase.storage
    .from('cheil-post')
    .upload(filePath, file, { upsert: true })

  if (error) {
    throw Error(error.message)
  }

  const parseData = {
    url: `${browserEnv.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data?.Key}`,
    originalFilename: file.name,
    width: 200,
    dpi: 144,
  }
  return parseData
}
