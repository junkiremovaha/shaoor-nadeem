// =====================================================
// Projects API Route
// Handles CRUD operations for portfolio projects
// =====================================================
import supabase from './db-client.js';

export default async function handler(req, res) {
  // CORS headers for cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    // GET: Fetch all projects, ordered by display order
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });
      if (error) throw error;
      return res.status(200).json(data);
    }

    // POST: Create new project
    if (req.method === 'POST') {
      const { title, description, category, technologies, image_url, display_order, details } = req.body;
      const { data, error } = await supabase
        .from('projects')
        .insert({ title, description, category, technologies, image_url, display_order, details })
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }

    // PUT: Update existing project
    if (req.method === 'PUT') {
      const { id, ...updates } = req.body;
      const { data, error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return res.status(200).json(data);
    }

    // DELETE: Remove project
    if (req.method === 'DELETE') {
      const { id } = req.body;
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Projects API error:', err);
    res.status(500).json({ error: err.message });
  }
}