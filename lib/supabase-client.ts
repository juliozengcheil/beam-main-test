import { createClient } from '@supabase/supabase-js'
import { browserEnv } from '@/env/browser'

export const supabase = createClient(
  browserEnv.NEXT_PUBLIC_SUPABASE_URL,
  browserEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
