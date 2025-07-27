import { AdminLoginForm } from '@/components/auth/admin-login-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <h1 className="font-headline text-3xl font-bold text-primary">Trade Hub</h1>
          <CardTitle className="font-headline text-2xl pt-2">Admin Panel</CardTitle>
          <CardDescription>
            Sign in to manage your store
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AdminLoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
