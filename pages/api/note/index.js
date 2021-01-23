import nc from 'next-connect';
import notes from '../../../src/data/data';

const handler = nc()
  .get((req, res) => {
    res.json({ data: notes });
  })
  .post((req, res) => {
    const id = Date.now();
    // req.body holds whatever they posted to the server
    const note = {
      ...req.body,
      id
    };
    // Add this note to the existing notes array
    notes.push(note);
    // Respond with the currently added note
    res.json({ data: note });
  });

export default handler;
