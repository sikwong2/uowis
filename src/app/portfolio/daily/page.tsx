import TopBar from '@/components/topbar'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Daily() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      <TopBar />

      <div className='z-10 font-mono font-bold  justify-center items-center flex flex-col'>
        <h1 className="p-4 text-6xl">Daily</h1>
        <Card className="max-w-3xl">
          <CardHeader className="flex justify-center items-center">
            <CardTitle>
              <Button className="button group">
                <Link
                  href="https://github.com/sikwong2/Daily"
                  className="group-hover:text-green-300 flex flex-row justify-center items-center font-mono gap-x-3"
                  target="_blank"
                >
                  <FaGithub />
                  <p>Repo</p>
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start ">
            <p>Daily is a minimalist habit tracking web application built with Next.js and TypeScript.</p>
            <p>The app allows users to track and monitor their daily habits with a clean, simple interface focused on ease of use. </p>
            <p>Live deployment available at <a href="https://daily-tau-five.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">daily-tau-five.vercel.app</a></p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
