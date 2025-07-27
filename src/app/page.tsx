import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, ShoppingCart } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingCart className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">Trade Hub</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/admin/login">Admin Login</Link>
          </Button>
          <Button>Get Started</Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-24 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Welcome to <span className="text-primary">Trade Hub</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            The ultimate e-commerce platform for your business. Manage your products, orders, and customers with ease.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link href="#">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/admin/login">
                Admin Panel
              </Link>
            </Button>
          </div>
        </section>

        <section className="bg-secondary py-20">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                    <h3 className="font-headline text-2xl font-semibold">Browse Catalog</h3>
                    <p className="mt-2 text-muted-foreground">Find what you're looking for with our extensive product catalog.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h3 className="font-headline text-2xl font-semibold">Easy Checkout</h3>
                    <p className="mt-2 text-muted-foreground">A seamless and secure checkout experience for your customers.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h3 className="font-headline text-2xl font-semibold">Admin Power</h3>
                    <p className="mt-2 text-muted-foreground">Full control over your store with a powerful admin panel.</p>
                </div>
            </div>
        </section>
      </main>
       <footer className="container mx-auto border-t py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Trade Hub. All Rights Reserved.
      </footer>
    </div>
  );
}
