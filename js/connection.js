import { createClient } from "https://esm.sh/@supabase/supabase-js";
import { config } from "./config.js";

export const supabase = createClient(
    config.supabaseUrl,
    config.supabaseKey
);