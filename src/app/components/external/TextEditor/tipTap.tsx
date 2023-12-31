// src/Tiptap.jsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import MenuBar from './menu'
import { useState } from 'react'

// define your extension array
const extensions = [
  StarterKit,
]

async function GetText(editor: any, setValue: any, index: number){
  let text = await editor?.getText()
  setValue(text, index)
}

export default function Tiptap({setValue, defaultValue, index = -1} : {setValue: any; defaultValue?: string; index: number}){

  const content = defaultValue ?? ""
  const [focused, setFocused] = useState(false)

  const editor = useEditor({
    extensions,
    content,
    editorProps: {
    attributes: {
      class: 'prose dark:prose-invert h-full prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none',
    },
  }})

  return (
    <div className="h-80 rounded-lg mt-5 overflow-hidden">
      <EditorContent className="bg-slate-500/40 overflow-y-auto h-full focus-within:bg-slate-500/50 transition-all p-5 rounded-lg relative"
        onBlur={() => {GetText(editor, setValue, index); setFocused(false)}}
        onFocus={() => setFocused(true)}
        editor={editor}>
        {editor?.getText() == "" && !focused && <div className="absolute top-0 select-none opacity-60 pt-5">Start typing...</div>}
      </EditorContent>
      {
        editor && 
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className='bg-slate-800/80 text-black p-2 rounded-md flex gap-2'>
            <button 
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`${editor.isActive('bold') ? 'bg-slate-50' : 'bg-slate-50/40 text-white'} h-8 w-8 font-bold p-2 rounded leading-3`}
            >
              A
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`${editor.isActive('italic') ? 'bg-slate-50' : 'bg-slate-50/40 text-white'} h-8 w-8  italic font-medium p-2 rounded leading-3`}
            >
              A
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`${editor.isActive('strike') ? 'bg-slate-50' : 'bg-slate-50/40 text-white'} h-8 w-8 line-through font-medium p-2 rounded leading-3`}
            >
              A
            </button>
          </div>
        </BubbleMenu>
      }
    </div>
  )
}