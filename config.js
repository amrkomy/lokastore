// config.js
const SUPABASE_CONFIG = {
    URL: "https://jdwhmebrdeshnjofditj.supabase.co",
    ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impkd2htZWJyZGVzaG5qb2ZkaXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NjEyNDEsImV4cCI6MjA3OTIzNzI0MX0.ymEqrGQhT7-w1Eu05pS8TsD_mEwJOiTHvQXeyFN8pt0"
};

// دالة للحصول على إعدادات Supabase
function getSupabaseConfig() {
    return {
        supabaseUrl: SUPABASE_CONFIG.URL,
        supabaseKey: SUPABASE_CONFIG.ANON_KEY
    };
}
