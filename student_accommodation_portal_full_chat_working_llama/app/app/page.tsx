import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HomeIcon, Building2, UtensilsIcon, MapPin, Star, Users } from 'lucide-react';

export default async function HomePage() {
  const session = await getServerSession();

  if (session) {
    const userType = (session.user as any)?.userType;
    if (userType === 'STUDENT') {
      redirect('/student/dashboard');
    } else if (userType === 'PROPERTY_OWNER') {
      redirect('/owner/dashboard');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-6xl">
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-blue-600" />
            <Link href="/" className="text-xl font-bold text-gray-900 hover:underline">
              EduStay
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
            Find Your Perfect Student Life
          </h1>
          <p className="text-xl text-red-600 font-bold max-w-3xl mx-auto leading-relaxed">
            Discover quality accommodation and food services near your university. Connect directly with verified property owners and service providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link href="/student/search">
              <Button size="lg" className="bg-blue-800 hover:bg-red-800 min-w-[500px]">
                <Users className="mr-2 h-5 w-5" />
                I'm a Student
              </Button>
            </Link>
            <Link href="/auth/register?type=owner">
              <Button size="lg"  className="bg-blue-800 hover:bg-red-800 min-w-[500px]">
                <Building2 className="mr-2 h-5 w-5" />
                I'm a Property Owner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose EduStay?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <Building2 className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Quality Accommodation</CardTitle>
              <CardDescription>
                Find PGs, hostels, apartments, and rooms near your university with all essential amenities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <UtensilsIcon className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Food Services</CardTitle>
              <CardDescription>
                Discover mess services, tiffin providers, canteens, and restaurants with your preferred cuisine.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <MapPin className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Interactive Maps</CardTitle>
              <CardDescription>
                Visualize locations, distances from universities, and explore nearby amenities with our map integration.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <Star className="h-10 w-10 text-yellow-600 mb-4" />
              <CardTitle>Reviews & Ratings</CardTitle>
              <CardDescription>
                Read authentic reviews from fellow students to make informed decisions about accommodation and food.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <Users className="h-10 w-10 text-indigo-600 mb-4" />
              <CardTitle>Direct Contact</CardTitle>
              <CardDescription>
                Connect directly with property owners and service providers without any middleman involvement.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <HomeIcon className="h-10 w-10 text-red-600 mb-4" />
              <CardTitle>Verified Listings</CardTitle>
              <CardDescription>
                All properties and services are verified to ensure quality and authenticity for student safety.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have found their perfect accommodation and food services through our platform.
            </p>
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Create Account Today
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <HomeIcon className="h-5 w-5 text-blue-600" />
              <Link href="/" className="font-semibold text-gray-900 hover:underline">
                EduStay
              </Link>
            </div>
            <p className="text-gray-600 text-sm">
              © 2025 EduStay. Connecting students with quality accommodation and food services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}