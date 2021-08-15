import React from 'react';
import Link from 'next/link';

const Page = () => (
    <div>
        <h1>Main Index Page</h1>
        <div>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
        </div>
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    </div>
)

export default Page;