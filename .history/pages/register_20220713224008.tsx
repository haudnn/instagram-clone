import Head from 'next/head'
import React from 'react'

const register = () => {
    return (
        <div>
            <Head>
                <title>Login • Instagram</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="bg-[rgba(250,250,250,1)] overflow-hidden min-h-screen flex grow flex-col shrink-0 box-border m-0 p-0 relative">
                <div className="flex grow flex-col shrink-0 box-border m-0 p-0 relative "></div>
                <main className="bg-[rgba(250,250,250,1)] flex grow order-4 m-0 p-0 relative shrink-0 items-stretch box-boder flex-col">
                    <div className="min-h-100% overflow-hidden mb-11 flex-auto min-w-0 justify-center flex-row items-center box-border relative">
                        <div className="">

                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default register