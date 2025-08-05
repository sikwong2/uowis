import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import TopBar from '@/components/topbar'

interface Item {
  id: string
  title: string
  description: string
  content: string
  footer?: string
  route: string
}

const items: Item[] = [
  {
    id: "1",
    title: "Huffman Coding",
    description: "A lossless data compression algorithm",
    content: '',
    route: '/portfolio/huffman'
  },
  {
    id: '2',
    title: 'Schmidt-Samoa cryptosystem',
    description: 'An asymmetric encryption algorithm',
    content: '',
    route: '/portfolio/schmidtsamoa'
  },
  {
    id: '3',
    title: 'UCSC-Amazon',
    description: 'An e-commerce marketplace',
    content: '',
    route: '/portfolio/amazon'
  },
  {
    id: '4',
    title: 'HTTP Server',
    description: 'A multithreaded HTTP server',
    content: '',
    route: '/portfolio/httpserver'
  },
  {
    id: '5',
    title: 'Blackjack Bot',
    description: 'A Discord bot to play blackjack',
    content: '',
    route: '/portfolio/blackjack'
  },
  {
    id: '6',
    title: 'RSA Encryption',
    description: 'An asymmetric encryption algorithm',
    content: '',
    route: '/portfolio/rsa'
  },
  {
    id: '7',
    title: 'Ball Simulation',
    description: 'A bouncing ball simulation',
    content: '',
    route: '/portfolio/physics'
  },
]

export default function Portfolio() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      <TopBar />
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {items.map((item) => (
          <Link key={item.id} href={item.route}>
            <Card key={item.id} className="h-full flex flex-col font-mono font-bold  text-2xl">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p>{item.content}</p>
              </CardContent>
              {item.footer && (
                <CardFooter>
                  <p className="text-sm ">{item.footer}</p>
                </CardFooter>
              )}
            </Card>

          </Link>
        ))}
      </div>

    </div>
  )
}
