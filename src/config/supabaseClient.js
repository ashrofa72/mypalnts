import { createClient } from '@supabase/supabase-js'



const supabaseUrl ='https://uwvqvrfwtxznovekcsow.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3dnF2cmZ3dHh6bm92ZWtjc293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI0NzQxNzAsImV4cCI6MTk3ODA1MDE3MH0.BSKVf8g9-jFl8MxEZG4LgOrbMvvfE_89yzIo0oGDlfY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase