import { useState } from 'react';
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteSchema } from "@blocknote/core";
// Or, you can use ariakit, shadcn, etc.
import { BlockNoteView } from "@blocknote/mantine";
// Default styles for the mantine editor
import "@blocknote/shadcn/style.css";
// Include the included Inter font
import "@blocknote/core/fonts/inter.css";
import { createAlert } from "./Alert";

export default function App() {
    const [showEditor, setShowEditor] = useState(true);
    // Create a new editor instance
    const schema = BlockNoteSchema.create().extend({
        blockSpecs: {
            // Creates an instance of the Alert block and adds it to the schema.
            alert: createAlert(),
        },
    });

    const editor = useCreateBlockNote({
        schema,
        initialContent: [
            {
                type: "alert",
                content: "This is an example alert",
            },
        ],
    });

    // Render the editor
    return <div>
        <button onClick={() => setShowEditor(x => !x)}>click me</button>
        {showEditor && <BlockNoteView editor={editor} />}</div>;
}