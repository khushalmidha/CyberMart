// lib/supabase.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;  // Add in .env.local
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;  // Add in .env.local

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
