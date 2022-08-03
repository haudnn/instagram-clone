import Head from 'next/head'
import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../features/auth/authSlice';
import { selectMessage } from '../features/auth/authSlice'

type FormData = {
    mail: string,
    fullname: string,
    username: string,
    password: string
}
const registerSchema = yup.object({
    mail: yup
        .string()
        .email('Vui lòng nhập một email hợp lệ')
        .required('Trường này không được để trống'),
    fullname: yup.string().required('Trường này không được để trống'),
    username: yup.string().required('Trường này không được để trống'),
    password: yup
        .string()
        .required('Trường này không được để trống')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Mật khẩu phải lớn hơn 8 ký tự và phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.'
        ),
})
const register = () => {
    const dispatch = useDispatch();
    const message = useSelector(selectMessage);
    const { register, handleSubmit, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(registerSchema) });
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        dispatch(authActions.register(data))
    });
    console.log(message)
    return (
        <div>
            <Head>
                <title>Login • Instagram</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="bg-[rgba(250,250,250,1)] overflow-hidden min-h-screen flex grow flex-col shrink-0 box-border m-0 p-0 relative">
                <div className="box-border relative flex flex-col p-0 m-0 grow shrink-0 "></div>
                <main className="bg-[rgba(250,250,250,1)] flex grow order-4 m-0 p-0 relative shrink-0 items-stretch box-boder flex-col">
                    <div className="min-h-[100%] flex overflow-hidden mb-11 flex-auto min-w-0 justify-center flex-row items-center">
                        <div className="mt-3 flex items-stretch flex-col relative box-border justify-center grow max-w-[350px] text-[rgba(38,38,38,0.1)]">
                            <div className="flex items-center flex-col shrink-0 box-border py-[10px] mb-[10px] rounded-sm border border-solid border-[rgba(219,219,219,1)] bg-[rgba(255,255,255,1)]">
                                <div className="mb-3 mt-9 container-flex-0-auto-start ">
                                    <div className="box-border relative flex flex-col items-stretch p-0 m-0 cursor-pointer shrink-0">
                                        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="object-contain max-w-full max-h-full" />
                                    </div>
                                </div>
                                {/* main */}
                                <div className="box-border flex flex-col items-stretch mb-5 shrink-0">
                                    <form onSubmit={onSubmit} className="max-w-[350px] flex flex-col"  >
                                        <h2 className="text-[#8e8e8e] text-base font-semibold text-center mb-[10px] mx-10">Sign up to see photos and videos from your friends.</h2>
                                        <div className="mx-10 my-2 container-flex-0-auto-start">
                                            <button className="cursor-pointer rounded relative block text-[14px] font-semibold text-center w-auto select-none text-ellipsis py-[5px] px-[9px]
                                            bg-[rgba(0,149,246,1)] text-[rgba(255,255,255,1)]" >
                                                <AiFillFacebook className="inline-block w-5 h-5 mr-2"></AiFillFacebook>{""}
                                                Log in with Facebook
                                            </button>
                                        </div>
                                        <div className="mt-[10px] mb-[18px] mx-10 flex flex-row box-border items-stretch relative">
                                            <div className="bg-[rgba(219,219,219,1)] flex grow shrink h-[1px] relative top-[0.45em]"></div>
                                            <div className="text-[rgba(142,142,142,1)] text-[13px] font-semibold uppercase leading-[15px] mx-[18px] flex grow-0 shrink-0">or</div>
                                            <div className="bg-[rgba(219,219,219,1)] flex grow shrink h-[1px] relative top-[0.45em]"></div>
                                        </div>
                                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgba(219,219,219,1)] rounded-sm text-neutral-800 ">
                                                <label className="relative flex min-w-0 p-0 m-0 flex-1-0-0 h-9">
                                                    <input type="text" placeholder=" " className="auth-input text-xs bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[5px] text-ellipsis "
                                                        {...register('mail')} />
                                                    <span className="transition duration-300 linear select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Email</span>
                                                </label>
                                            </div>
                                            <span className="text-xs italic font-semibold text-red-600">{errors.mail?.message}</span>
                                        </div>
                                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgba(219,219,219,1)] rounded-sm text-neutral-800 ">
                                                <label className="relative flex min-w-0 p-0 m-0 flex-1-0-0 h-9">
                                                    <input type="text" placeholder=" " className="auth-input text-xs bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[5px] text-ellipsis"
                                                        {...register('fullname')}
                                                    />
                                                    <span className=" transition duration-300 linear select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Full Name</span>
                                                </label>
                                            </div>
                                            <span className="text-xs italic font-semibold text-red-600">{errors.fullname?.message}</span>
                                        </div>
                                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgba(219,219,219,1)] rounded-sm text-neutral-800 ">
                                                <label className="relative flex min-w-0 p-0 m-0 flex-1-0-0 h-9">
                                                    <input type="text" placeholder=" " className="auth-input text-xs bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[5px]  text-ellipsis"
                                                        {...register('username')}
                                                    />
                                                    <span className="select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Username</span>
                                                </label>
                                            </div>
                                            <span className="text-xs italic font-semibold text-red-600">{errors.username?.message}</span>
                                        </div>
                                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgba(219,219,219,1)] rounded-sm text-neutral-800 ">
                                                <label className="relative flex min-w-0 p-0 m-0 flex-1-0-0 h-9">
                                                <input type="password" placeholder=" " className="auth-input text-xs bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[5px]  text-ellipsis"
                                                        {...register('password')}
                                                    />
                                                    <span className="select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Password</span>
                                                </label>
                                            </div>
                                            <span className="text-xs italic font-semibold text-red-600">{errors.password?.message}</span>
                                        </div>
                                        <p className="text-[rgba(142,142,142,1)] text-xs text-center my-[10px] mx-10">
                                            People who use our service may have uploaded your contact information to Instagram. {""}
                                            <a href="" target="_blank" className="font-semibold">Learn More</a>
                                            <br />
                                            <br />
                                            By signing up, you agree to our {""}
                                            <a href="" target="_blank" className="font-semibold">Terms</a>
                                            , {""}
                                            <a href="" target="_blank" className="font-semibold">Data Policy</a>
                                            and {""}
                                            <a href="" target="_blank" className="font-semibold">Cookies Policy</a>
                                            {""}.
                                        </p>
                                        <div className="m-2 mx-10 container-flex-0-auto-start" >
                                            <button type="submit" className="cursor-pointer rounded relative block text-[14px] font-semibold text-center w-auto select-none text-ellipsis py-[5px] px-[9px] bg-[rgba(0,149,246,1)] text-[rgba(255,255,255,1)]">
                                                <div className="container-flex-0-auto-start">Sign up</div>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex items-center shrink-0 flex-col relative box-border rounded-sm py-[10px] mb-[10px] border border-solid border-[rgb(219,219,219)] bg-white">
                                <div className="block text-[rgba(142,142,,142,1)] font-normal text-sm m-[-3px] mb-[-4px] ">
                                    <p className="text-sm text-neutral-800 m-[15px] text-center">Have an account? {""}
                                        <a href="" className="text-[rgba(0,149,246,1)]">
                                            <span className="inline-block m-0 text-[rgba(0,149,246,1)] text-sm">Log in</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center p-0 m-0 shrink-0 ">
                                <p className="my-[10px] mx-5 text-sm text-center text-neutral-800">Get the app.</p>
                                <div className="flex flex-row justify-center my-[10px]">
                                    <a href="" className="mr-2">
                                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" className="h-[40px]" />
                                    </a>
                                    <a href="" className="mr-2">
                                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt=""
                                            className="h-[40px]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default register