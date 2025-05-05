

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Blackjack() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      {/* Background layer with blur */}
      <div className="absolute inset-0 bg-[url('/images/lofi-room-wallpapers.jpg')] bg-cover bg-center blur-xs z-0"></div>

      <div className='z-10 font-mono font-bold text-white justify-center items-center flex flex-col'>
        <h1 className="p-4 text-6xl">Blackjack Bot</h1>
        <Card className="max-w-3xl">
          <CardHeader className="flex justify-center items-center"> {/* Centering applied here */}
            <CardTitle>
              <Button className="button group">
                <Link
                  href="https://github.com/sikwong2/discord-save"
                  className="group-hover:text-green-300 flex flex-row justify-center items-center font-mono gap-x-3"
                >
                  <FaGithub />
                  <p>Repo</p>
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start font-mono">
            <img alt="Blackjack hand" src="https://www.shutterstock.com/image-vector/blackjack-hand-spades-black-jack-600nw-2122961363.jpg" />
            <p>This is a blackjack Discord bot. </p>
            <p>With this bot you and your friends can see who is the better blackjack player. It has a leaderboard to keep track of the person with the most chips. It is a rudimentary version of blackjack with only stand and hit as possible actions. And it does not use 6 decks like most casinos do so it&apos;s not representative of what you would play in real life.</p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

