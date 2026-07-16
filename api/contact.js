// =====================================================
// Contact Form API Route
// Handles contact form submissions
// =====================================================
import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    // GET: Fetch all contact messages (for admin)
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return res.status(200).json(data);
    }

    // POST: Submit new contact message
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }
      
      const { data, error } = await supabase
        .from('contact_messages')
        .insert({ name, email, subject: subject || 'No Subject', message })
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }

    // DELETE: Remove contact message
    if (req.method === 'DELETE') {
      const { id } = req.body;
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Contact API error:', err);
    res.status(500).json({ error: err.message });
  }
}