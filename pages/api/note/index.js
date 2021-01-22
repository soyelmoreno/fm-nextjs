import nc from 'next-connect';
import notes from '../../../src/data/data';

const handler = nc()
  .post((req, res) => {
    const note = {
      // Whatever is in request.body is what they posted to the server
      ...req.body,
      id: Date.now()
    };
    notes.push(note);
    res.json({ data: note });
  })
  .get((req, res) => {
    res.json({ data: notes });
  });

export default handler;
