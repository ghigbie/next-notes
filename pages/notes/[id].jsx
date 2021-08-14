import React from 'react';
import { useRouter } from 'next/router' 

const Page = () => {
    const router = useRouter();
    const {id} =  router.query;

    return(<div>Note Index Page {id}</div>)
}

export default Page;