import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function RSA() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      {/* Background layer with blur */}
      <div className="absolute inset-0 bg-[url('/images/lofi-room-wallpapers.jpg')] bg-cover bg-center blur-xs z-0"></div>

      <div className='z-10 font-mono font-bold text-white justify-center items-center flex flex-col'>
        <h1 className="p-4 text-6xl">RSA Encryption</h1>
        <Card className="max-w-3xl">
          <CardHeader className="flex justify-center items-center"> {/* Centering applied here */}
            <CardTitle>
              <Button className="button group">
                <Link
                  href="https://github.com/sikwong2/rsa-encryption"
                  className="group-hover:text-green-300 flex flex-row justify-center items-center font-mono gap-x-3"
                >
                  <FaGithub />
                  <p>Repo</p>
                </Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start font-mono">
            <img alt="Asymmetric encription" src="https://www.securew2.com/wp-content/uploads/2024/01/RSA-Encryption-Works.png" />
            <p>This is an implementation of the RSA encryption algorithm in C.</p>
            <p>RSA encryption is based on the difficulty of factoring large composite numbers into their prime factors</p>
            <p>In the key generation phase, two large prime numbers, pp and qq, are selected and multiplied to produce n=p×qn=p×q. The algorithm then computes Euler&apos;s totient function ϕ(n)=(p−1)(q−1) and chooses an encryption exponent ee that is coprime with ϕ(n). A decryption exponent d is derived as the modular inverse of e modulo ϕ(n), such that e×d≡1 mod ϕ(n). The public key consists of (e,n), while the private key is (d,n).</p>
            <p>For encryption, a sender converts their plaintext message into an integer m (smaller than n) and computes the ciphertext c as c≡m<sup>e</sup>mod n. The recipient decrypts the message by computing m≡c<sup>d</sup>mod  n, recovering the original plaintext.</p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

