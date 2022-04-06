import { createClient } from '@supabase/supabase-js'
import { browserEnv } from '@/env/browser'
import fileDownload from 'js-file-download'
import getFilename from './getFilename'

export const supabase = createClient(
  browserEnv.NEXT_PUBLIC_SUPABASE_URL,
  browserEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export const onClickDownload = (fileUrl: string) => {
  supabase.storage
    .from('cheil-post')
    .download(fileUrl)
    .then((res) => {
      console.log('res', fileUrl)
      const filename = getFilename(fileUrl)
      fileDownload(res.data!, filename)
    })
    .catch((e) => {
      console.log('some error on supabase', e.message)
    })
}
