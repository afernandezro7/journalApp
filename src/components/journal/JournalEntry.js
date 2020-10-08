import React from 'react'

export const JournalEntry = ({entry}) => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnfxh5HCyZO4-DRReOxW1BkZPHVgkTztu43g&usqp=CAU)',
                    backgroundPosition: 'center'
                }}
            ></div> 

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un Nuevo día
                </p>
                <p className="journal__entry-content">
                    Labore nulla duis et laborum excepteur adipisicing.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
