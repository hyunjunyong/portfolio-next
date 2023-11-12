import { createClient } from '@supabase/supabase-js';

const key: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';
const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';

export const supabase = createClient(url, key);
