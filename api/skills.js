// =====================================================
// Skills API Route
// Handles CRUD operations for skills matrix
// =====================================================
import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    // GET: Fetch all skills grouped by category
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true })
        .order('proficiency', { ascending: false });
      if (error) throw error;
      return res.status(200).json(data);
    }

    // POST: Add new skill
    if (req.method === 'POST') {
      const { name, category, proficiency } = req.body;
      const { data, error } = await supabase
        .from('skills')
        .insert({ name, category, proficiency })
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }

    // PUT: Update skill proficiency
    if (req.method === 'PUT') {
      const { id, ...updates } = req.body;
      const { data, error } = await supabase
        .from('skills')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return res.status(200).json(data);
    }

    // DELETE: Remove skill
    if (req.method === 'DELETE') {
      const { id } = req.body;
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', id);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Skills API error:', err);
    res.status(500).json({ error: err.message });
  }
}