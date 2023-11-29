import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://orhoxceekfxnxvkwteml.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yaG94Y2Vla2Z4bnh2a3d0ZW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3NTU3MTAsImV4cCI6MjAxNjMzMTcxMH0.yIkZxzOHnrTyuysf_JBPRFxF7ZHPx2i79OgSwlZiMrI`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
