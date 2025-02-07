import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  .env.VITE_SUPABASE_KEY
);

const Admin = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
  />
);

export default Admin;
