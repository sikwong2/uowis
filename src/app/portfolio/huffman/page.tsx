import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Huffman() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      {/* Background layer with blur */}
      <div className="absolute inset-0 bg-[url('/images/lofi-room-wallpapers.jpg')] bg-cover bg-center blur-xs z-0"></div>

      <div className='z-10 font-mono font-bold text-white justify-center items-center flex flex-col'>
        <h1 className="p-4 text-6xl">Huffman Coding</h1>
        <Card className="max-w-3xl">
          <CardHeader className="flex justify-center items-center"> {/* Centering applied here */}
            <CardTitle>
              <Button className="button group">
                <Link
                  href="https://github.com/sikwong2/huffman-coding"
                  className="group-hover:text-green-300 flex flex-row justify-center items-center font-mono gap-x-3"
                >
                  <FaGithub />
                  <p>Repo</p>
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start ">
            <img alt="A huffman tree" src="https://matematicas.uam.es/~fernando.chamizo/dark/images/huff_ex_2.png" />
            <p>This is an implementation of Huffman Coding done in C.</p>
            <p>Huffman coding is a lossless data compression algorithm that assigns shorter binary codes to more frequent characters and longer codes to less frequent ones. It builds a binary tree based on character frequencies, ensuring the most efficient encoding to reduce overall file size without losing any data.</p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

