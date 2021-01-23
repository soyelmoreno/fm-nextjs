import nc from 'next-connect';
import notes from '../../../src/data/data';

// Function to find the note with the given id in the array of notes
const getNote = (id) => notes.find((n) => n.id === parseInt(id));

// If we're in this file, then the user has entered a url with an id.
const handler = nc()
  // This GET method will retrieve the note with the given id, if it exists
  .get((req, res) => {
    // req.query holds the query parameters

    // req.query is an object holding any query parameters. The parameter name
    // on the query object is the same as the parameter in the file name for
    // this page.

    // req.query.id ---> [id].js
    const note = getNote(req.query.id);
    // If a note with the given id doesn't exist, respond with a 404
    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    // If we get to here, the desired note exists, so respond with it
    res.json({ data: note });
  })

  // This PATCH method will update the note with the given id, if it exists
  .patch((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    // The desired note exists. Find the index of the note
    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    // Create an updated version of the note. Spread out the current keys, then
    // overwrite any keys that were provided in the request body. This merges
    // the new stuff into (on top of) the old stuff.
    const updated = { ...note, ...req.body };
    // At this note index, replace the current note with the updated one
    notes[i] = updated;
    // Respond with the full updated note
    res.json({ data: updated });
  })

  // This DELETE method will delete the note with the given id, if it exists
  .delete((req, res) => {
    const note = getNote(req.query.id);
    if (!note) {
      res.status(404);
      res.end();
      return;
    }
    // The note exists. Find its index
    const i = notes.findIndex((n) => n.id === parseInt(req.query.id));
    // Remove this note from the array
    notes.splice(i, 1);
    // Respond with the id of the note we deleted
    res.json({ data: req.query.id });
  });

export default handler;
