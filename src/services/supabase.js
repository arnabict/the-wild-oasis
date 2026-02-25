import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uxnoayhiiordjnuffbkh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4bm9heWhpaW9yZGpudWZmYmtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4Mzg5MjcsImV4cCI6MjA4NDQxNDkyN30.Iv-qcn8uNUAE5KPOMele-1dU1FE4X3VVVfCH69uYbwU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
