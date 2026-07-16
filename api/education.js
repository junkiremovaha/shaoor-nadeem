// =====================================================
// Education & Certifications API Route
// Handles CRUD operations for education and certifications
// =====================================================
import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    // GET: Fetch all education/certifications ordered by year
    if (req.method === 'GET') {
      const { type } = req.query; // 'education' or 'certification'
      let query = supabase
        .from('education')
        .select('*')
        .order('year', { ascending: false });
      
      if (type) {
        query = query.eq('type', type);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return res.status(200).json(data);
    }

    // POST: Add new education/certification
    if (req.method === 'POST') {
      const { title, institution, year, type, description } = req.body;
      const { data, error } = await supabase
        .from('education')
        .insert({ title, institution, year, type, description })
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }

    // PUT: Update education/certification
    if (req.method === 'PUT') {
      const { id, ...updates } = req.body;
      const { data, error } = await supabase
        .from('education')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return res.status(200).json(data);
    }

    // DELETE: Remove education/certification
    if (req.method === 'DELETE') {
      const { id } = req.body;
      const { error } = await supabase
        .from('education')
        .delete()
        .eq('id', id);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Education API error:', err);
    res.status(500).json({ error: err.message });
  }
}