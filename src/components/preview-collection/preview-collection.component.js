import React from 'react';

import './preview-collection.styles.scss';

const CollectionPreview = ({title, items}) => {
    return (
        <div>
            <div className="collection-preview">
                <h1 className="title">
                    {title.toUpperCase()}
                </h1>
                <div className="preview">
                    {
                        items.map(item => {
                             return <div key={item.id}>{item.name}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionPreview

