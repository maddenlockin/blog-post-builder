import React from 'react'
import { useState } from 'react'
import Preview from '../../components/Preview/Preview'
import Editor from '../../components/Editor/Editor'

import './Home.css'

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [font, setFont] = useState('comforter')
  const [align, setAlign] = useState('ri-align-left')
  const [text, setText] = useState('')

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} align={align} text={text} />
      <Editor
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        font={font}
        setFont={setFont}
        align={align}
        setAlign={setAlign}
        text={text}
        setText={setText}
      />
    </main>
  )
}
