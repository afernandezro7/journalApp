import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar/>
            
            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://c4.wallpaperflare.com/wallpaper/873/195/664/blue-mountains-dual-monitor-snow-covered-mountain-wallpaper-preview.jpg"
                        alt="notes_image"
                    />
                </div>
            </div>


        </div>
    )
}
