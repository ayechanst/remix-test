import styles from './NewNote.css';

function NewNote() {
  console.log('new note works');
  return (
    <form method="post" id="note-form">
      {/* this returns an object of the submitted form, and sends it to our backend stuff */}
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
