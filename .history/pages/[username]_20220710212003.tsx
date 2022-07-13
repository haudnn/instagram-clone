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
                <main className="bg-[rgb(250,250,250)] flex grow items-stretch flex-col relative m-0 p-0 shrink box-border">
                    <div className="pt-[30px] px-[20px] pb-0 box-content">

                    </div>
                </main>
            </section>
        </div>
    )
}

export default Profile