import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header'
const Profile: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Instagram</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}

export default Profile