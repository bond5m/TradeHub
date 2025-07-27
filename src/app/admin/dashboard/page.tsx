import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";


export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between border-b bg-card px-6">
        <h1 className="font-headline text-xl font-semibold">Trade Hub Admin</h1>
        <Button asChild variant="outline">
          <Link href="/">Sign Out</Link>
        </Button>
      </header>
      <main className="flex-1 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to your Dashboard</CardTitle>
            <CardDescription>This is where you'll manage your e-commerce store.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>From here, you will be able to manage products, categories, orders, and inventory. This page is a placeholder for now.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
