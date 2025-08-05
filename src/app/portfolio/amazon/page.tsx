import TopBar from "@/components/topbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Amazon() {
  return (
    <div className="relative min-h-screen flex flex-col align-middle font-mono">
      <TopBar />

      <div className='z-10 font-mono font-bold  justify-center items-center flex flex-col'>
        <h1 className="p-4 text-6xl">UCSC-Amazon</h1>
        <Card className="max-w-3xl">
          <CardHeader className="flex justify-center items-center"> {/* Centering applied here */}
            <CardTitle>
              <Button className="button group">
                <Link
                  href="https://github.com/sikwong2/amazon"
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
            <img alt="Amazon logo" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png" />
            <p>This is a fullstack e-commerce app largely inspired by Amazon</p>
            <p>UCSC-Amazon was a group project done in CSE187: Fullstack Web Development. The app features a public facing API to allow people to list items for sale on the app. Users are able to create accounts or log in with Google OAUTH. UCSC-Amazon uses Stripe for safe and secure payment processing. The app has fully functioning search and product pages</p>
            <p>This project was my first time collaborating with others on a project of this large of a scale. </p>

          </CardContent>
        </Card>
      </div>

    </div>
  )
}

