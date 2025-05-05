import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Httpserver() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      {/* Background layer with blur */}
      <div className="absolute inset-0 bg-[url('/images/lofi-room-wallpapers.jpg')] bg-cover bg-center blur-xs z-0"></div>

      <div className='z-10 font-mono font-bold text-white justify-center items-center flex flex-col'>
        <h1 className="p-4 text-6xl">HTTP Server</h1>
        <Card className="max-w-3xl">
          <CardHeader className="flex justify-center items-center"> {/* Centering applied here */}
            <CardTitle>
              <Button className="button group">
                <Link
                  href="https://github.com/sikwong2/httpeserver"
                  className="group-hover:text-green-300 flex flex-row justify-center items-center font-mono gap-x-3"
                >
                  <FaGithub />
                  <p>Repo</p>
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start font-mono">
            <img alt="Asymmetric encription" src="https://miro.medium.com/v2/resize:fit:2560/1*AwGI1e13BoLvUd2wThmSLw.jpeg" />
            <p>This is a multithreaded HTTP Server written in C. </p>
            <p>The server can handle concurrent GET and PUT requests. The server listens on a port and parses the request for valid headers and sends</p>

          </CardContent>
        </Card>
      </div>

    </div>
  )
}

