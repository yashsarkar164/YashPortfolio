import React from 'react'

export default function Todoist() {
    return (
        <iframe src="https://app.todoist.com/app/task/doooingss-6cv52W4XFH9XrWqM" frameBorder="0" title="Todoist" className="h-full w-full"></iframe>
        // just to bypass the headers 🙃
    )
}

export const displayTodoist = () => {
    <Todoist> </Todoist>
}
