import React from 'react';
import './style.css'

export default function Words({word, validKeys}) {
    if(!word) return null;
    const joinedKeys = validKeys.join('');
    const matched = word.slice(0, joinedKeys.length);
    const remainder = word.slice( joinedKeys.length)

    return (
        <dl>
            <span className={`matched ${(joinedKeys == word) ? 'completed' : ''}`}>{matched}</span>
            <span className="remainder">{remainder}</span>
        </dl>
    )
}