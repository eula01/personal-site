import { Playfair_Display } from "next/font/google"
import Link from "next/link"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Page() {

  return (
    <main
      className="min-h-screen w-full relative text-white p-8 md:p-12 lg:p-16 bg-gray-900" // Added fallback background color
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pasted%20Graphic%202-3oTyV2f0I1jr781jEFKyz6kkFAZqb3.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        {/* Bio */}
        <div className={`${playfair.className} text-lg md:text-xl space-y-6 mb-12`}>Sean Waplington</div>
        <div className={`${playfair.className} text-lg md:text-xl space-y-6 mb-12`}>
          <p>
            prev: hire 1 at{" "}
            <Link
              href="https://techcrunch.com/2023/08/11/11xai-closes-2-million-pre-seed-to-create-autonomous-ai-workers/"
              className="hover:underline"
              target="_blank"
            >
              11x.ai
            </Link>
            , cofounder{" "}
            <Link href="https://carnegie-aero.com" className="hover:underline" target="_blank">
              carnegie-aero.com
            </Link>
            , hire 2{" "}
            <Link
              href="https://techcrunch.com/2024/09/25/convergence-ai-played-with-agents-for-years-until-raising-12m-to-give-them-long-term-memory/"
              className="hover:underline"
              target="_blank"
            >
              convergence.ai
            </Link>
            , principal engineer at{" "}
            <Link href="https://ebury.com" className="hover:underline" target="_blank">
              ebury.com
            </Link>
            , staff engineer at{" "}
            <Link href="https://theprintspace.com" className="hover:underline" target="_blank">
              theprintspace.com
            </Link>
          </p>
          <p>now: building something new</p>
        </div>

        {/* Links */}
        <div className={`${playfair.className} space-y-8 text-sm md:text-base`}>
          <div>
            <Link href="https://www.linkedin.com/in/seaneula/" className="block hover:underline" target="_blank">
              linkedin
            </Link>
            <Link href="https://carnegiepilled.substack.com" className="block hover:underline" target="_blank">
              carnegiepilled.substack.com
            </Link>
            <span>
              seanwaplington[at]gmail{"{"}dot{"}"}.com
            </span>
          </div>

          <p className="text-sm md:text-base max-w-xl leading-relaxed">
            i welcome all reach outs – all feedback / thoughts / new friends welcomed – especially if you think i'm
            wrong about something on my substack, you have a specific ask, or you are building something important
          </p>
        </div>
      </div>
    </main>
  )
}

