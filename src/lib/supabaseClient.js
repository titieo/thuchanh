import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://weaughxswjpwirdjraab.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlYXVnaHhzd2pwd2lyZGpyYWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NDc4NTcsImV4cCI6MTk5OTUyMzg1N30.hB8oikmuFAR1AyhmydMqRTKc-gw3QK8aLbOZzpTl2Wk'
);
