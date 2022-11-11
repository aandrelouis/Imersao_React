
import { createClient } from '@supabase/supabase-js'
const PROJECT_URL = "https://wztzctjdfzteximxvdki.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6dHpjdGpkZnp0ZXhpbXh2ZGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMTE1MjAsImV4cCI6MTk4MzY4NzUyMH0.jG51roXIdMNeIyXV1l8aRjxRMAqZI2UPOI2FayomKqk"
const supabase = createClient(PROJECT_URL, API_KEY);


export function videoService(){
    return {
        getAllVideos(){
          return supabase.from("video").select("*")
        }
    }
}