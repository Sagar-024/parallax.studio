import notFound from "@/app/assets/not-found.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-6 p-4">
      <div className="relative w-[80%] sm:w-[60%] lg:w-1/4 aspect-square">
        <Image
          src={notFound}
          alt="OOPS..."
          fill
          className="object-contain rounded-full"
        />
      </div>
      <div className="flex flex-col text-center w-[80%] sm:w-[60%] lg:w-1/3 space-y-4">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p className="text-destructive">Could not find the requested page</p>
        <Button asChild variant="outline" className="w-max mx-auto">
          <Link href="/">Back To Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
