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
                <Header/>
                <main className="mt-[50px] bg-[rgb(250,250,250)] flex grow items-stretch flex-col relative m-0 p-0 shrink box-border">
                    <div className="pt-[30px] px-[20px] pb-0 box-content flex flex-col shrink-0 relative container-profile mb-0 mx-auto mt-0 grow max-w-[935px]">
                        <header className="mb-[44px] flex flex-row">
                            <div className="mr-[30px] flex grow basis-0 shrink-0 flex-col items-stretch relative box-border">
                                <div className="cursor-pointer flex items-center flex-col ">
                                    <div className="w-[150px] h-[150px] conic-gradient relative rounded-full mb-3">
                                        <img
                                            src="https://source.unsplash.com/random"
                                            className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <section className="basis-[30px] grow-[2] container-profile-info">
                                <div className="flex mb-[20px] items-center flex-row shrink min-w-[0]">
                                    <h2 className="block overflow-hidden text-ellipsis whitespace-nowrap text-neutral-800 font-light text-2xl mt-[-5px] mb-[-6px]">ameemee_m</h2>
                                    <div className>

                                    </div>
                                </div>
                            </section>
                        </header>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Profile