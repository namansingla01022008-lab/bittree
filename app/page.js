"use client"


import HeroAnimation from "./components/HeroAnimation";
import { Poppins, Vina_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TextLoop from "./components/TextLoop";
import { useEffect } from "react";
import { data, style } from "motion/react-client";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react"

const poppins = Poppins({
  weight: ["500", "900"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter()
  const [text, settext] = useState("")
  const [info, setinfo] = useState([])
  const [visible, setvisible] = useState({ first: false, second: false, third: false, fourth: false, fifth: false, sixth: false, seventh: false })

  async function fetchpics() {
    try {
      const response = await fetch('/api/links');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      setinfo(data)
      console.log(data[0].pic); // this is important
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    return data
  }


  useEffect(() => {
    fetchpics()
  }, [])

  const duration = info.length * 5


  const createTree = () => {
    router.push(`/generate/?handle=${text}`)
  }
  return (
    <main>
      <Navbar />
      <section className="bg-[#D2E823] min-h-screen grid grid-cols-2">
        <div className=" flex items-center justify-end flex-col ml-[5vw] pb-25">
          <h1 className={`text-[#254f1a] self-start font-extrabold text-8xl ${poppins.className}`}>A link in bio</h1>
          <h1 className="text-[#254f1a] self-start font-extrabold text-8xl mb-10"> built for you.</h1>
          <p className={`text-[#295f1a] text-lg pr-4 ${poppins.className}`}>Join 70M+ people using Bittree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-3 justify-center items-center w-full mt-8">
            <input value={text} onChange={(e) => { settext(e.target.value) }} type="text" placeholder="Enter Your Handle" className={`focus:outline-[#D2E823] bg-white px-4 py-4 w-1/2 text-lg rounded-lg text-gray-700 ${poppins.className}`} />
            <button onClick={() => { createTree() }} className={`w-1/2 ${poppins.className} bg-green-900 py-4 text-white flex items-center justify-center rounded-full cursor-pointer`}>
              Get started for free
            </button>
          </div>
        </div>
        <div className="pr-[5vw] w-full flex justify-end">
          <div className="w-150">
            <HeroAnimation />
          </div>
        </div>
      </section>
      <section className="bg-[#2665d6] min-h-screen grid grid-cols-2">
        <div className="cols-1 items-center flex justify-center">
          <div className="relative overflow-hidden rounded-2xl w-full h-full flex items-center justify-center bg-[#2665d6]">
            <video
              src="/final.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              width="550"
            />
          </div>
        </div>
        <div className="cols-2 flex flex-col justify-center gap-5 px-5">
          <div className="headings flex flex-col gap-1">
            <h1 className={`text-[#d2e823] text-6xl font-bold ${poppins.className}`}>Create and</h1>
            <h1 className={`text-[#d2e823] text-6xl font-bold ${poppins.className}`}>customize your</h1>
            <h1 className={`text-[#d2e823] text-6xl font-bold ${poppins.className}`}>Bittree in minutes</h1>
          </div>
          <div className="content">
            <p className={` text-lg ${poppins.className}`}>Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Bittree automatically enhance it to match your brand and drive more clicks.</p>
          </div>
          <div className="button">
            <button className="bg-[#d2e823] text-black text-[16px] font-semibold cursor-pointer px-20 flex items-center justify-center py-4 rounded-full hover:bg-[#dff05f] hover:py-5"><Link href={"/generate"}>Get started for free</Link></button>
          </div>
        </div>

      </section>
      <section className="bg-[#780016] min-h-screen grid grid-cols-2">
        <div className="col1 h-full w-full flex-col flex pl-20 gap-5 justify-center">
          <div className="heading flex flex-col gap-1">
            <h1 className={`text-[#e9c0e9] text-6xl font-bold ${poppins.className}`}>Share your Bitktree </h1>
            <h1 className={`text-[#e9c0e9] text-6xl font-bold ${poppins.className}`}>anywhere you like!</h1>
          </div>
          <div className="content">
            <p className={` text-lg ${poppins.className}`}>Add your unique Bittree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.</p>
          </div>
          <div className="button">
            <button className="bg-[#e9c0e9] text-black text-[16px] font-semibold cursor-pointer px-20 flex items-center justify-center py-4 rounded-full hover:bg-[#f488f4] hover:py-5"><Link href={"/generate"}>Get started for free</Link></button>
          </div>
        </div>
        <div className="col2 items-center flex justify-center">
          <div className="relative overflow-hidden rounded-2xl w-full h-full flex items-center justify-center bg-[#780016]">
            <video
              src="/redfinal.mp4"
              autoPlay
              loop
              muted
              preload="metadata"
              playsInline
              width="510"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#e8efd6] min-h-screen grid grid-cols-2">
        <div className="col1 items-center flex justify-center">
          <div className="relative overflow-hidden rounded-2xl w-full h-full flex items-center justify-center bg-[#e8efd6]">
            <img src="/analyze-audience.avif" alt="Analyze Audience" className="h-[80%] w-[80%]" />
          </div>
        </div>
        <div className="col2 h-full w-full flex-col flex pl-20 gap-5 justify-center">
          <div className="heading flex flex-col gap-1">
            <h1 className={`text-black text-6xl font-bold ${poppins.className}`}>Analyze your</h1>
            <h1 className={`text-black  text-6xl font-bold ${poppins.className}`}>audience and keep</h1>
            <h1 className={`text-black  text-6xl font-bold ${poppins.className}`}>them engaged</h1>
          </div>
          <div className="content">
            <p className={` text-lg text-black ${poppins.className}`}>Add your unique Bittree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.</p>
          </div>
          <div className="button">
            <button className="bg-[#e9c0e9] text-black text-[16px] font-semibold cursor-pointer px-20 flex items-center justify-center py-4 rounded-full hover:bg-[#f488f4] hover:py-5"><Link href={"/generate"}>Get started for free</Link></button>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f1] min-h-screen flex flex-col py-20 gap-5">
        <div className="col1 flex items-center justify-center flex-col mb-10">
          <div className="headings flex flex-col gap-4 items-center justify-center">
            <h1 className={`text-6xl text-[rgb(30,35,48)] font-bold ${poppins.className}`}>The only link in bio trusted by 70M+</h1>
            <TextLoop className="text-blue-600 text-6xl font-extrabold" />
          </div>
        </div>
        <div className="col2 my-0 overflow-hidden">
          <div className="cards-display flex gap-10 pb-10 animate-scroll w-max" style={{ animationDuration: `${duration}s` }}>
            {[...info, ...info].map((item, index) => {
              return (
                // onClick={()=>{router.push(`/${item.handle}`)}}
                <div key={index} className="card1 cursor-pointer border border-black overflow-hidden rounded-xl w-90">
                  <Link href={`/${item.handle}`} target="_blank">
                    <img src={item.pic} alt="Joined Bittree" className="w-full h-full object-cover" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f1] grid grid-cols-2 min-h-screen">
        <div className="col1">
          <div className="cards-container flex flex-col gap-4 pr-5">
            <div className="card1 bg-[#e9c0e9] cursor-pointer gap-8 w-[90%] self-end h-110 rounded-4xl flex flex-col items-center justify-end">
              <div className="pic flex items-center justify-center">
                <img src="/all-your-things.avif" alt="all-your-things" className="w-[90%]" />
              </div>
              <div className="content flex flex-col w-[90%] mt-12 mb-10">
                <h1 className="text-black text-3xl font-bold self-start ">Share every type of</h1>
                <h1 className="text-black text-3xl font-bold self-start ">content in limitless ways</h1>
              </div>
            </div>
            <div className="card2 bg-[#d2e823] cursor-pointer gap-8 w-[90%] self-end h-110 rounded-4xl flex flex-col items-center justify-end">
              <div className="pic flex items-center justify-center">
                <img src="/products-1.avif" alt="all-your-things" className="w-[75%]" />
              </div>
              <div className="content flex flex-col w-[90%] mt-8 mb-10">
                <h1 className="text-black text-3xl font-bold self-start ">Sell products, collect payments</h1>
                <h1 className="text-black text-3xl font-bold self-start ">and make monetization simple</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="big-card bg-[#061492] cursor-pointer h-full rounded-4xl mr-15 flex flex-col py-5 gap-20">
            <div className="pic w-[90%] h-[80%] flex items-center justify-center pt-5 pl-10">
              <Image
                className=' w-[80%] h-full items-center'
                loading='eager'
                src={"/form.avif"}
                alt='Form image'
                width={660}
                height={660}
              />
            </div>
            <div className="content flex flex-col justify-end w-[90%] self-center">
              <h1 className="text-3xl font-bold self-start">Grow, own and engage your</h1>
              <h1 className="text-3xl font-bold self-start">audience across all of your channels</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f1] min-h-[85vh] flex flex-col items-center justify-center gap-10">
        <div className="content flex flex-col items-center justify-center gap-1">
          <h1 className={`font-extrabold text-[#1e2330] text-6xl`}>The fast, friendly and</h1>
          <h1 className={`font-extrabold text-[#1e2330] text-6xl`}>powerful link in bio tool.</h1>
        </div>
        <div className="button">
          <button className="bg-[#e9c0e9] text-[#1e2330] text-[16px] font-semibold cursor-pointer px-8 flex items-center justify-center py-4 rounded-full hover:bg-[#ebb5eb]"><Link href={"/generate"}>Explore all plans</Link></button>
        </div>
      </section>
      <section className="bg-[#f3f3f1] min-h-[60vh] flex flex-col items-center justify-center gap-10">
        <div className="content flex flex-col items-center justify-center gap-1">
          <h1 className={`font-extrabold text-[#1e2330] text-6xl`}>As featured in…</h1>
        </div>
        <div className="users flex flex-col gap-5">
          <div className="top-3 flex gap-5">
            <div className="techcrunch  flex items-center justify-center rounded-full w-85 h-18 bg-white">
              <Image
                src={"/techcrunch.avif"}
                alt="Tech Crunch company"
                width={150}
                height={50}
              />
            </div>
            <div className="techcrunch flex items-center justify-center rounded-full w-85 h-18 bg-white">
              <Image
                src={"/insider.avif"}
                alt="Insider company"
                width={70}
                height={30}
              />
            </div>
            <div className="techcrunch flex items-center justify-center rounded-full w-85 h-18 bg-white">
              <Image
                src={"/forbes.avif"}
                alt="Forbes company"
                width={60}
                height={30}
              />
            </div>
          </div>
          <div className="bottom-2 flex gap-5 items-center justify-center">
            <div className="techcrunch flex items-center justify-center rounded-full w-85 h-18 bg-white">
              <Image
                src={"/mashable.avif"}
                alt="Mashable company"
                width={100}
                height={50}
              />
            </div>
            <div className="techcrunch flex items-center justify-center rounded-full w-85 h-18 bg-white">
              <Image
                src={"/fortune.avif"}
                alt="Fortune company"
                width={110}
                height={50}
              />
            </div>
          </div>

        </div>
      </section>
      <section className="qna bg-[#780016] min-h-screen flex flex-col gap-15 items-center py-25">
        <h1 className="text-[#e9c0e9] text-6xl font-extrabold mt-15">Questions? Answered</h1>
        <div className="questions w-[70%] flex flex-col gap-2">
          <div className="wrapper p-0.5 hover:border-2 hover:border-[#54000f] rounded-4xl ">
            <div className="question1 bg-[#54000f] p-5 w-full rounded-4xl flex flex-col justify-center overflow-hidden">
              <div onClick={() => { setvisible({ first: !(visible.first) }) }} className="question flex justify-between px-5 items-center cursor-pointer h-20">
                <h1 className="text text-[#e9c0e9] text-xl font-bold">Is Bittree the original link in bio tool?</h1>
                <svg width="20" height="20" viewBox="0 0 0.8 0.8" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#e9c0e9" d="M.404.511.672.243a.03.03 0 0 1 .04 0 .03.03 0 0 1 0 .04L.424.571a.03.03 0 0 1-.039 0L.088.269a.03.03 0 0 1 0-.04.03.03 0 0 1 .04 0z" />
                </svg>
              </div>
              <AnimatePresence>
                {visible.first &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ><div className="answer p-5 text-[16px] text-[#e9c0e9] font-semibold">The short answer? Yes! <br /> <br />
                      Back in 2016, we created Bittree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Bittree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning. You can use your Bittree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Bittree, you do not need one!</div></motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
          <div className="wrapper p-0.5 hover:border-2 hover:border-[#54000f] rounded-4xl ">
            <div className="question1 bg-[#54000f] p-5 w-full rounded-4xl flex flex-col justify-center overflow-hidden">
              <div onClick={() => { setvisible({ second: !(visible.second) }) }} className="question flex justify-between px-5 items-center cursor-pointer h-20">
                <h1 className="text text-[#e9c0e9] text-xl font-bold">Can you get paid and sell things from a Bittree?</h1>
                <svg width="20" height="20" viewBox="0 0 0.8 0.8" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#e9c0e9" d="M.404.511.672.243a.03.03 0 0 1 .04 0 .03.03 0 0 1 0 .04L.424.571a.03.03 0 0 1-.039 0L.088.269a.03.03 0 0 1 0-.04.03.03 0 0 1 .04 0z" />
                </svg>
              </div>
              <AnimatePresence>
                {visible.second &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ><div className="answer p-5 text-[16px] text-[#e9c0e9] font-semibold">Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect revenue from affiliate links, and sell your products right in your Bittree. Monetisation features are only available for selected countries, see this <Link href="https://linktr.ee/help/en/articles/11126119-who-can-use-Bittree-s-earn-features" className="underline decoration-2">Help Article</Link> for more.<br /> <br />
                      A lot of Bittree creators see incredible results with online sales on Bittree, because it removes the extra steps involved in a purchase.
                      <br /><br />
                      <p className="font-extrabold">“We love how Bittree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany</p></div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
          <div className="wrapper p-0.5 hover:border-2 hover:border-[#54000f] rounded-4xl ">
            <div className="question1 bg-[#54000f] p-5 w-full rounded-4xl flex flex-col justify-center overflow-hidden">
              <div onClick={() => { setvisible({ third: !(visible.third) }) }} className="question flex justify-between px-5 items-center cursor-pointer h-20">
                <h1 className="text text-[#e9c0e9] text-xl font-bold">Is Bittree safe to use on all of my social media profiles?</h1>
                <svg width="20" height="20" viewBox="0 0 0.8 0.8" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#e9c0e9" d="M.404.511.672.243a.03.03 0 0 1 .04 0 .03.03 0 0 1 0 .04L.424.571a.03.03 0 0 1-.039 0L.088.269a.03.03 0 0 1 0-.04.03.03 0 0 1 .04 0z" />
                </svg>
              </div>
              <AnimatePresence>
                {visible.third &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ><div className="answer p-5 text-[16px] text-[#e9c0e9] font-semibold">Bittree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because Bittree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.</div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
          <div className="wrapper p-0.5 hover:border-2 hover:border-[#54000f] rounded-4xl ">
            <div className="question1 bg-[#54000f] p-5 w-full rounded-4xl flex flex-col justify-center overflow-hidden">
              <div onClick={() => { setvisible({ fourth: !(visible.fourth) }) }} className="question flex justify-between px-5 items-center cursor-pointer h-20">
                <h1 className="text text-[#e9c0e9] text-xl font-bold">What makes Bittree better than the other link in bio options?</h1>
                <svg width="20" height="20" viewBox="0 0 0.8 0.8" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#e9c0e9" d="M.404.511.672.243a.03.03 0 0 1 .04 0 .03.03 0 0 1 0 .04L.424.571a.03.03 0 0 1-.039 0L.088.269a.03.03 0 0 1 0-.04.03.03 0 0 1 .04 0z" />
                </svg>
              </div>
              <AnimatePresence>
                {visible.fourth &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ><div className="answer p-5 text-[16px] text-[#e9c0e9] font-semibold">
                      We have our own opinions here, of course, but the stories of the people who use Bittree matter more. Let’s hear what they have to say:
                      <br />
                      <br />
                      <p className="font-extrabold">“Four months into creating, someone messaged me like: You need a Bittree. I can’t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Bittree set up, I was like, oh my god – why did I spend $100 on a website? I don’t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman</p>
                      <br />
                      <p className="font-extrabold">It’s so much easier to set up and have all of your links in one place in a well designed format.” – Catie T</p>
                      <br />
                      <p className="font-extrabold">“Websites are cool (I have one) but Bittrees just make it so much easier.” – Tan Nguyen</p>
                      <br />
                      <p className="font-extrabold">“I love their analytics. Other link-in-bio companies don’t provide extensive data on what’s going on.” – Riley Lemon</p>
                      <br />
                      Bittree invented the bio link tool in 2016, and it continues to be the world’s most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Bittree today and see for yourself!
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
          <div className="wrapper p-0.5 hover:border-2 hover:border-[#54000f] rounded-4xl ">
            <div className="question1 bg-[#54000f] p-5 w-full rounded-4xl flex flex-col justify-center overflow-hidden">
              <div onClick={() => { setvisible({ fifth: !(visible.fifth) }) }} className="question flex justify-between px-5 items-center cursor-pointer h-20">
                <h1 className="text text-[#e9c0e9] text-xl font-bold">How can i drive more traffic to and through my Bittree?</h1>
                <svg width="20" height="20" viewBox="0 0 0.8 0.8" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#e9c0e9" d="M.404.511.672.243a.03.03 0 0 1 .04 0 .03.03 0 0 1 0 .04L.424.571a.03.03 0 0 1-.039 0L.088.269a.03.03 0 0 1 0-.04.03.03 0 0 1 .04 0z" />
                </svg>
              </div>
              <AnimatePresence>
                {visible.fifth &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ><div className="answer p-5 text-[16px] text-[#e9c0e9] font-semibold">
                      Sharing your Bittree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.
                      <br />
                      <br />
                      Once visitors arrive on your Bittree, easy-to-understand analytics help you quickly and easily discover where they’re coming from, and what they’re clicking on. You can immediately see what’s working and what’s not and improve your Bittree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
          <div className="wrapper p-0.5 hover:border-2 hover:border-[#54000f] rounded-4xl ">
            <div className="question1 bg-[#54000f] p-5 w-full rounded-4xl flex flex-col justify-center overflow-hidden">
              <div onClick={() => { setvisible({ sixth: !(visible.sixth) }) }} className="question flex justify-between px-5 items-center cursor-pointer h-20">
                <h1 className="text text-[#e9c0e9] text-xl font-bold">How many links should i have on my Bittree?</h1>
                <svg width="20" height="20" viewBox="0 0 0.8 0.8" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#e9c0e9" d="M.404.511.672.243a.03.03 0 0 1 .04 0 .03.03 0 0 1 0 .04L.424.571a.03.03 0 0 1-.039 0L.088.269a.03.03 0 0 1 0-.04.03.03 0 0 1 .04 0z" />
                </svg>
              </div>
              <AnimatePresence>
                {visible.sixth &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ><div className="answer p-5 text-[16px] text-[#e9c0e9] font-semibold">
                      This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Bittree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.
                      <br />
                      <br />
                      That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.
                      <br />
                      <br />
                      You can use features on Bittree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first.
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
          <div className="wrapper p-0.5 hover:border-2 hover:border-[#54000f] rounded-4xl ">
            <div className="question1 bg-[#54000f] p-5 w-full rounded-4xl flex flex-col justify-center">
              <div onClick={() => { setvisible({ seventh: !(visible.seventh) }) }} className="question flex justify-between px-5 items-center cursor-pointer h-20">
                <h1 className="text text-[#e9c0e9] text-xl font-bold">Do i need a website to use Bittree?</h1>
                <svg width="20" height="20" viewBox="0 0 0.8 0.8" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#e9c0e9" d="M.404.511.672.243a.03.03 0 0 1 .04 0 .03.03 0 0 1 0 .04L.424.571a.03.03 0 0 1-.039 0L.088.269a.03.03 0 0 1 0-.04.03.03 0 0 1 .04 0z" />
                </svg>
              </div>
              <AnimatePresence>
                {visible.seventh &&
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  ><div className="answer p-5 text-[16px] text-[#e9c0e9] font-semibold">
                      No, you don’t! Bittree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Bittree.
                      <br />
                      <br />
                      “I hardly touch my website any more. I just send people to my Bittree! It’s a good-looking, fresh interface… so much more dynamic. I can take a few minutes, update my links and put my phone away rather than spending 45 struggling on WordPress.”
                      <Link href={"https://linktr.ee/ashleyhopeperez"} className="font-extrabold underline decoration-2">@ashleyhopeperez</Link>
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <section className="ending bg-[#502274] min-h-screen relative overflow-hidden">
        <Image
          className="rotate-12"
          src={"/assets/person.svg"}
          alt="person.svg"
          width={500}
          height={500}
        />
        <div className="absolute top-60 left-70 flex flex-col items-center justify-center">
          <div className="headings flex items-center justify-center flex-col">
            <h1 className="text-[#e9c0e9] text-6xl font-extrabold">Jumpstart your corner of the</h1>
            <h1 className="text-[#e9c0e9] text-6xl font-extrabold">internet today</h1>
          </div>
          <div className="input flex gap-3 justify-center items-center w-full mt-15">
            <input value={text} onChange={(e) => { settext(e.target.value) }} type="text" placeholder="Enter Your Handle" className={`focus:outline-gray-600 bg-white px-4 py-4 w-1/3 text-lg rounded-lg text-gray-500 ${poppins.className}`} />
            <button onClick={() => { createTree() }} className={`w-1/3 ${poppins.className} bg-[#d2e823] py-4 text-[#1e2330] flex items-center justify-center rounded-full cursor-pointer`}>
              Claim your Bittree
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
