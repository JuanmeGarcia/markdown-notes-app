import * as React from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import 'react-mde/lib/styles/css/react-mde-all.css'

const converter = new Showdown.Converter({
	tables: true,
	simplifiedAutoLink: true,
	strikethrough: true,
	tasklists: true,
})

export default function Editor({ currentNote, updateNote }) {
	const [selectedTab, setSelectedTab] = React.useState('write')

	return (
		<section className="pane editor container">
			<ReactMde
				value={currentNote.body}
				onChange={updateNote}
				selectedTab={selectedTab}
				onTabChange={setSelectedTab}
				generateMarkdownPreview={markdown =>
					Promise.resolve(converter.makeHtml(markdown))
				}
			/>
		</section>
	)
}
