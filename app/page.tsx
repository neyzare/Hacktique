import {
  AnimatedSpan,
  Terminal,
} from "@/components/magicui/terminal";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import ArticleCard from "./component/page";
import logoOwasp from "../assets/TOP_10_logo_Final_Logo_Colour.png"
import logoTryHackme from "../assets/logo-tryhackme.png"
import logoPentestTools from "../assets/pentesttools-logo.svg"

export default function Home() {
  return (
    <>

      {/* Terminal */}
      <div className="flex items-center justify-center min-h-[60vh] bg-white p-4">
        <div className="w-full max-w-screen-md overflow-x-auto rounded-lg">
          <Terminal className="break-words p-4 flex justify-center terminal">
            <TypingAnimation className="text-black text-xl">&gt; Hacktique lancé avec succès !</TypingAnimation>

            <AnimatedSpan delay={1500} className="text-green-500">
              <span>✔ Préparation de ton environnement d'apprentissage.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-green-500">
              <span>✔ Verifying framework. Found Next.js.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2500} className="text-green-500">
              <span>✔ Validating Tailwind CSS.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-green-500">
              <span>✔✔ Conseils de démarrage :</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3500} className="text-green-500">
              <span>- Commence petit, apprends beaucoup</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4000} className="text-green-500">
              <span>- Échoue souvent, mais échoue vite</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4500} className="text-green-500">
              <span>- Pose des questions, explore, comprends</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5000} className="text-green-500">
              <span>✔ Objectif : devenir autonome, curieux, et éthique 💡</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5500} className="text-green-500">
              <span>✔ Installing dependencies.</span>
            </AnimatedSpan>

            <AnimatedSpan delay={6000} className="text-blue-500">
              <span>ℹ Updated 1 file:</span>
              <span className="pl-2">- lib/utils.ts</span>
            </AnimatedSpan>
          </Terminal>
        </div>
      </div>
      <hr className="border-black border-1" />

      {/* Articles */}
      <div className="py-12 bg-white px-4">
        <h2 className="text-2xl font-semibold text-black text-center mb-10">Articles sur la cybersécurité</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <ArticleCard 
            title="Top 10 OWASP"
            description="Top 10 des vulnérabilités de sécurité des applications Web"
            url="https://owasp.org/Top10/"
            image={logoOwasp}
          />
          <ArticleCard
            title="Blog de TryHackMe"
            description="L'un des meilleurs site sur la cybersecurité"
            image={logoTryHackme}
            url="https://tryhackme.com/resources/blog"
          />
          <ArticleCard
            title="Blog Pentest Tools"
            description="Blog sur le piratage éthique et les tests d'intrusion"
            image={logoPentestTools}
          />
        </div>
      </div>
    </>
  );
}