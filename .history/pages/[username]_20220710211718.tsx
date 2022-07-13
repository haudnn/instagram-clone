import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header'
const Profile: NextPage = () => {
    return (
        <div>
            <Head>
                <title>AMEE (@ameemee_m) • Instagram photos and videos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="flex flex-col grow overflow-hidden min-h-screen">
                <Header />
            </section>
        </div>
    )
}

export default Profile