import Head from 'next/head'
import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../app/hooks';
import { authActions } from '../features/auth/authSlice';
type FormData = {
  mail: string,
  password: string
}
const loginSchema = yup.object({
  mail: yup
    .string()
    .email('Vui lòng nhập một email hợp lệ')
    .required('Trường này không được để trống'),
  password: yup
    .string()
    .required('Trường này không được để trống')
})
const login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(loginSchema) });
  const dispatch = useAppDispatch()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    dispatch(authActions.login(data))
  });

  return (
    <div>
      <Head>
        <title>Instagram </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-[rgba(250,250,250,1)] overflow-hidden min-h-screen flex grow flex-col shrink-0 box-border m-0 p-0 relative">
        <div className="box-border relative flex flex-col p-0 m-0 grow shrink-0 "></div>
        <main className="bg-[rgba(250,250,250,1)] flex grow order-4 m-0 p-0 relative shrink-0 items-stretch box-boder flex-col">
          <article className="flex flex-row justify-center items-center mx-auto mt-8 mb-0 max-w-[935px] pb-8 w-full">
            <div className="bg-login">
              <div className="mt-[27px] ml-[113px] relative">
                <img className="img-login active" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="" />
              </div>
            </div>
            <div className="mt-3 w-full max-w-[350px] text-[rgba(38,38,38,0.1)]">

              <div className="flex items-center shrink-0 flex-col relative box-border rounded-sm py-[10px] mb-[10px] border border-solid border-[rgb(219,219,219)] bg-white">
                <div className="mb-3 mt-9 container-flex-0-auto-start ">
                  <div className="box-border relative flex flex-col items-stretch p-0 m-0 cursor-pointer shrink-0">
                    <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="object-contain max-w-full max-h-full" />
                  </div>

                </div>
                <div className="mb-[10px] max-w-[350px] w-full flex flex-col shrink-0 m-0 p-0 box-border relative items-stretch">
                  <form onSubmit={onSubmit} className="flex flex-col">
                    <div className="mt-6 container-flex-0-auto-start">
                      <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                        <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgb(219,219,219)] rounded-sm text-neutral-800 ">
                          <label className="relative flex min-w-0 p-0 m-0 flex-1-0-0 h-9">
                            <input type="text" placeholder=" " className="auth-input text-xs bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[5px] text-ellipsis "
                              {...register('mail')} />
                            <span className="transition duration-300 linear select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Email</span>
                          </label>
                        </div>
                        <span className="text-xs italic font-semibold text-red-600">{errors.mail?.message}</span>
                      </div>
                      <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                        <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgb(219,219,219)] rounded-sm text-neutral-800 ">
                          <label className="relative flex min-w-0 p-0 m-0 flex-1-0-0 h-9">
                            <input type="text" placeholder=" " className="auth-input text-xs bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[5px] text-ellipsis "
                              {...register('password')} />
                            <span className="transition duration-300 linear select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Password</span>
                          </label>
                          {/* <div className="flex flex-row items-center h-full pr-2 align-middle flex-0-auto">
                            <div className="ml-2 container-flex-0-auto-start">
                              <button className="relative hidden w-auto p-0 text-sm font-semibold text-center bg-transparent cursor-pointer select-none text-neutral-800 text-ellipsis">Show</button>
                            </div>
                          </div> */}
                        </div>
                        <span className="text-xs italic font-semibold text-red-600">{errors.password?.message}</span>
                      </div>
                      <div className="m-2 mx-10 container-flex-0-auto-start" >
                        <button type="submit" className="cursor-pointer rounded relative block text-[14px] font-semibold text-center w-auto select-none text-ellipsis py-[5px] px-[9px]
                            bg-[rgba(0,149,246,1)] text-[rgba(255,255,255,1)]">
                          <div className="container-flex-0-auto-start">Log in</div>
                        </button>
                      </div>
                      <div className="mt-[10px] mb-[18px] mx-10 flex flex-row box-border items-stretch relative">
                        <div className="bg-[rgba(219,219,219,1)] flex grow shrink h-[1px] relative top-[0.45em]"></div>
                        <div className="text-[rgba(142,142,142,1)] text-[13px] font-semibold uppercase leading-[15px] mx-[18px] flex grow-0 shrink-0">or</div>
                        <div className="bg-[rgba(219,219,219,1)] flex grow shrink h-[1px] relative top-[0.45em]"></div>
                      </div>
                      <div className="m-2 mx-10 container-flex-0-auto-start">
                        <button type="submit" className="inline-block border-0 text-[#385185] p-0 relative cursor-pointer text-[14px] font-semibold text-center w-auto select-none text-ellipsis ">
                          <AiFillFacebook className="inline-block w-5 h-5 mr-2"></AiFillFacebook>
                          <span className="text-[#385185]">Log in with Facebook</span>
                        </button>
                      </div>
                      <a href="" className="mt-3 block text-center text-xs text-[rgba(0,55,107,1)]">Forgot password?</a>
                    </div>
                  </form>
                </div>
              </div>
              {/* mid */}
              <div className="flex items-center shrink-0 flex-col relative box-border rounded-sm py-[10px] mb-[10px] border border-solid border-[rgb(219,219,219)] bg-white">
                <div className="block text-[rgba(142,142,,142,1)] font-normal text-sm m-[-3px] mb-[-4px] ">
                  <p className="text-sm text-neutral-800 m-[15px] text-center">Don't have an account? {""}
                    <a href="" className="text-[rgba(0,149,246,1)]">
                      <span className="inline-block m-0 text-[rgba(0,149,246,1)] text-sm font-semibold">Sign up</span>
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
          </article>
        </main>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default login