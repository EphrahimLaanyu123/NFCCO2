import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wypdqskzrgtlfakdgmbb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5cGRxc2t6cmd0bGZha2RnbWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MjQwNTgsImV4cCI6MjA1NDUwMDA1OH0.7f2YchEVs0UWgaP6a4jQIfOhzf9r_I5hpx9ZoW1aABI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;