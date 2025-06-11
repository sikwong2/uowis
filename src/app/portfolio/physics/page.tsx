import TopBar from "@/app/_components/topbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Physics() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      <TopBar />
      <div className='z-10 font-mono font-bold  justify-center items-center flex flex-col'>
        <h1 className="p-4 text-6xl">Ball Simulation</h1>
        <Card className="max-w-3xl">
          <CardHeader className="flex justify-center items-center"> {/* Centering applied here */}
            <CardTitle>
              <Button className="button group">
                <Link
                  href="https://github.com/sikwong2/physics"
                  className="group-hover:text-green-300 flex flex-row justify-center items-center font-mono gap-x-3"
                  target="_blank"
                >
                  <FaGithub />
                  <p>Repo</p>
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start font-mono">
            <iframe src="/bouncing_ball.gif" className="w-full h-96 border-none" />
            <p>This is a bouncing ball simulation done in Go</p>
            <p>I wanted to learn Golang so I tried to make a bouncing ball simulation using SDL3. This was my first time using a graphics library like SDL3 so there was a bit of learning curve. </p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

