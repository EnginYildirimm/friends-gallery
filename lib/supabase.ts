import { appConfig } from "@/constants/config";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = appConfig.SUPABASE_URL;
const supabaseKey = appConfig.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
