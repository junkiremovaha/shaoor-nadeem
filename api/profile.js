// =====================================================
// Profile API Route
// Handles profile information (about me, social links)
// =====================================================
import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    // GET: Fetch profile info
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('profile')
        .select('*')
        .single();
      if (error && error.code !== 'PGRST116') throw error;
      return res.status(200).json(data || {});
    }

    // POST/PUT: Update profile info
    if (req.method === 'POST' || req.method === 'PUT') {
      const profileData = req.body;
      
      // Check if profile exists
      const { data: existing } = await supabase
        .from('profile')
        .select('id')
        .single();

      let data, error;
      if (existing) {
        // Update existing profile
        const result = await supabase
          .from('profile')
          .update(profileData)
          .eq('id', existing.id)
          .select()
          .single();
        data = result.data;
        error = result.error;
      } else {
        // Create new profile
        const result = await supabase
          .from('profile')
          .insert(profileData)
          .select()
          .single();
        data = result.data;
        error = result.error;
      }
      
      if (error) throw error;
      return res.status(200).json(data);
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Profile API error:', err);
    res.status(500).json({ error: err.message });
  }
}