import { createClient } from '@supabase/supabase-js'
import { browserEnv } from '@/env/browser'
import fileDownload from 'js-file-download'

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
      const hyphenIndex = fileUrl.indexOf('-')
      const filename = fileUrl.substring(hyphenIndex + 1)
      fileDownload(res.data!, filename)
    })
    .catch((e) => {
      console.log('some error on supabase', e.message)
    })
}
