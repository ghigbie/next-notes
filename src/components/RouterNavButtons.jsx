import { useRouter } from 'next/router';
import React from 'react';
impore {useRouter } from 'next/router';

export default ({id}) => {
    const router = useRouter()

    return (
        <>
            <button onClick={ e => router.push('/')}>
                Go Home 
            </button>

            <button onClick={ e => router.push('/notes/[id]', `/notes/${id}`)}>
                Go To Note {id}
            </button>
        </>
    )
}