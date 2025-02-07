import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://duetijuqtxfvnjghgcnt.supabase.co' // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1ZXRpanVxdHhmdm5qZ2hnY250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MTU3NDQsImV4cCI6MjA1NDQ5MTc0NH0.VYj_DWW3RZlU1wp-3z-zHyBKm9UpMdToMQ0SeapYPRI' // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase