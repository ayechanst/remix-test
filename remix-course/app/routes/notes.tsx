import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import NewNote from '~/components/NewNote';
import newNoteStyles from '~/components/NewNote.css';
import NoteList, { links as noteListLinks } from '~/components/NoteList';
import { getStoredNotes, storeNotes } from '~/data/notes';

export default function NotesPage() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

// another reserved name, MUST USE
export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}

// This --action-- function is a reserved name for when --method="post"-- is used in NewNote.tsx (just like links())
// This function is on the backend, this will not load for the user
export async function action({ request }) {
  console.log('action func works');
  const formData = await request.formData();
  const noteData = {
    title: formData.get('title'),
    content: formData.get('content'),
  };
  const existingNotes = await getStoredNotes();
  console.log(existingNotes, typeof existingNotes);
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');
}

export function links() {
  return [{ rel: 'stylesheet', href: newNoteStyles }, ...noteListLinks()];
}

// export function links() {
//   return [...newNoteLinks(), ...noteListLinks()];
// }
