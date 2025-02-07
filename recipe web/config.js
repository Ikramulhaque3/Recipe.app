const {createClient} = supabase

const supabaseUrl = 'https://wrvlkncspopuhhgdwwht.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndydmxrbmNzcG9wdWhoZ2R3d2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MTc3MDEsImV4cCI6MjA1MzI5MzcwMX0.sNleetyM-TWwjfn2fTm6sh0vbOqyPhGcClLNaNy94ZE'
const supabaseClient = createClient(supabaseUrl, supabaseKey)

window.supabase = supabaseClient 