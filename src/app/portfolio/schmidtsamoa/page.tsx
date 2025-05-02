
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function SchmidtSamoa() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      {/* Background layer with blur */}
      <div className="absolute inset-0 bg-[url('/images/lofi-room-wallpapers.jpg')] bg-cover bg-center blur-xs z-0"></div>

      <div className='z-10 font-mono font-bold text-white justify-center items-center flex flex-col'>
        <h1 className="p-4 text-6xl">Schmidt-Samoa</h1>
        <Card className="max-w-3xl">
          <CardHeader className="flex justify-center items-center"> {/* Centering applied here */}
            <CardTitle>
              <Button className="button group">
                <Link
                  href="https://github.com/sikwong2/schmidt-samoa"
                  className="group-hover:text-green-300 flex flex-row justify-center items-center font-mono gap-x-3"
                >
                  <FaGithub />
                  <p>Repo</p>
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start font-mono">
            <img alt="Asymmetric encription" src="https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/1100/assymmetric-encryption-1256x706.png" />
            <p>This is an implementation of the Schmidt-Samoa cryptosystem done in Python.</p>
            <p>The Schmidt-Samoa cryptosystem is an asymmetric encryption algorithm based on the difficulty of factoring large integers</p>
            <p>This project begins with first generating a public and private key. Creating the keys involves generating two sufficiently large primes, p and q. We compute the public key, N, as p<sup>2</sup>q. And the private key, d, as N<sup>-1</sup> mod lcm(p - 1, q - 1)</p>
            <p>To encrypt a file I read in the file and encode it into a number, m, and compute the ciphertext, c, with m<sup>N</sup> mod N</p>
            <p>To decrypt the ciphertext, c, we compute is as follows: c<sup>d</sup> mod pq</p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

