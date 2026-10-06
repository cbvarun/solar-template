import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you were looking for has moved or doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/">Go to home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact/">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
