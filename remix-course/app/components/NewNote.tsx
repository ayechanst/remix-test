import styles from './NewNote.css';
import { Form } from '@remix-run/react';

function NewNote() {
  // <Form></Form> is special remix form
  return (
    <Form method="post" id="note-form">
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
    </Form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
