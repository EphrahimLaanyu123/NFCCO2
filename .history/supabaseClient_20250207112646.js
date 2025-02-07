import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://duetijuqtxfvnjghgcnt.supabase.co' // Replace with your Supabase URL
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY' // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase