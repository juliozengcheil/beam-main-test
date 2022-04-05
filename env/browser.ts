import { invalidEnvError, makeValidator, str, url } from 'envsafe'
import { bool, envsafe } from 'envsafe'

const supabaseParser = makeValidator<string>((input) => {
  if (browserEnv.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD && input === '') {
    throw invalidEnvError('supabase config', input)
  }
  return input
})

export const browserEnv = envsafe({
  NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD: bool({
    input: process.env.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD,
    default: false,
  }),
  // supabase should be in api but for faster dev we useit here on brower
  NEXT_PUBLIC_SUPABASE_URL: supabaseParser({ allowEmpty: true, default: '' }),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: supabaseParser({
    allowEmpty: true,
    default: '',
  }),
})
