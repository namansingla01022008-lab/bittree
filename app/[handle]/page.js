
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import Notfound from "../notfound/page"
import Share from "../components/Share"

export default async function Page({ params }) {
    const { handle } = (await params)
    const client = await clientPromise
    const db = client.db("bittree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle })
    if (!item) {
        return (
            <>
                <Notfound />
            </>
        )
    }

    return (
        <>
            <div className="bg-purple-500 fixed bottom-5 left-[43%] text-lg font-bold rounded-full px-5 py-3 text-shadow-2xs shadow-black shadow-md hover:px-6 hover:py-4 cursor-pointer hover:shadow-lg hover:bg-purple-800 hover:text-white duration-300"><Link href={"/generate"}>Make Your Bittree Now !!</Link></div>
            <div className="background flex w-screen min-h-screen bg-[#d4f678] justify-center p-10">
                <div className="card bg-pink-200 w-[38vw] rounded-3xl py-6 shadow-black shadow-lg">
                    <div className="top-bar flex justify-between">
                        <div className="logo px-8 pt-2 cursor-pointer">
                            <Link href={"/"}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.7603 6.829L20.4328 2.02583L23.1448 4.80317L18.2436 9.47565H25.138V13.3313H18.2109L23.1448 18.1235L20.4328 20.8464L13.7345 14.1154L7.03621 20.8464L4.32421 18.1344L9.25808 13.3421H2.33105V9.47565H9.22542L4.32421 4.80317L7.03621 2.02583L11.7087 6.829V0H15.7603V6.829ZM11.7087 18.8533H15.7603V28H11.7087V18.8533Z"
                                        fill="black"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <Share url={`${process.env.NEXT_PUBLIC_HOST}/${handle}`} pic={item.pic} />

                    </div>
                    <div className="profile w-full flex items-center flex-col gap-3">
                        <img src={item.pic} alt="profile pic" className="rounded-full w-24 h-24 shadow-black shadow-md border-black border" />
                        <span className={` text-black font-bold text-xl`}>@{item.handle}</span>
                    </div>
                    <div className="icons-dynamic flex justify-center gap-2 mt-4">
                        {item.links.map((item, index) => {
                            return (
                                <div key={index} >
                                    <div className="icons flex ">
                                        {(item.link).includes("github.com") && <span><Link href={item.link}><img src="/assets/github.svg" alt="Github Svg" /></Link></span>}

                                        {(item.link).includes("instagram.com") && <span><Link href={item.link}><img src="/assets/instagram.svg" alt="Instagram Svg" /></Link></span>}

                                        {(item.link).includes("youtube.com") && <span><Link href={item.link}><img src="/assets/youtube.svg" alt="Youtube Svg" /></Link></span>}

                                        {(item.link).includes("linkedin.com") && <span><Link href={item.link}><img src="/assets/linkedin.svg" alt="Linkedin Svg" /></Link></span>}

                                        {(item.link).includes("vercel.com") && <span><Link href={item.link}><img src="/assets/vercel.svg" alt="Vercel Svg" /></Link></span>}

                                        {(item.link).includes("spotify.com") && <span><Link href={item.link}><img src="/assets/spotify.svg" alt="Spotify Svg" /></Link></span>}

                                        {(item.link).includes("facebook.com") && <span><Link href={item.link}><img src="/assets/facebook.svg" alt="Facebook Svg" /></Link></span>}

                                        {(item.link).includes("music.apple.com") && <span><Link href={item.link}><img src="/assets/apple-music.svg" alt="Apple Music Svg" /></Link></span>}

                                        {(item.link).includes("tiktok.com") && <span><Link href={item.link}><img src="/assets/tiktok.svg" alt="Tiktok Svg" /></Link></span>}

                                        {(item.link).includes("x.com") && <span><Link href={item.link}><img src="/assets/twitter.svg" alt="Twitter Svg" /></Link></span>}

                                        {(item.link).includes("snapchat.com") && <span><Link href={item.link}><img src="/assets/snapchat.svg" alt="Twitter Svg" /></Link></span>}

                                        {(item.link).includes("upwork.com") && <span><Link href={item.link}><img src="/assets/upwork.svg" alt="Upwork Svg" /></Link></span>}
                                    </div>
                                </div>)
                        })}
                    </div>
                    <div className="flex flex-col gap-4 items-center mt-8">
                        {item.links.map((item, index) => {
                            return (
                                <Link key={index} href={item.link} className="w-[90%] text-black font-bold border border-black shadow-black shadow-md bg-blue-100 flex items-center justify-center rounded-full py-4 text-lg cursor-pointer hover:bg-blue-500 hover:text-white duration-300">{item.linktext.toUpperCase()}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}