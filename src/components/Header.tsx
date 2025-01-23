
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs';
  import Container from '@/components/Container';
  import Link from 'next/link';
  import Image from 'next/image';


const Header = () => {
    return (
      <header className="mt-8 mb-0 border-b pb-12">
          <Container>
          <div className="flex items-center justify-between gap-20 logo">
            <Image src="/shajid-logo.png" alt="Shajid Logo" width={160} height={160} className="h-6 w-11" /><h1 className="text-3xl font-bold head-title">Happiness Computers</h1>
            
      <nav className="flex items-center gap-8">
        <Link href="/" className="text-lg font-semibold">Home</Link>
        <Link href="/about" className="text-lg font-semibold">About</Link>
        <Link href="/admissions" className="text-lg font-semibold">Admissions</Link>
        <Link href="/student-life" className="text-lg font-semibold">Student Life</Link>
        <Link href="/contact" className="text-lg font-semibold">Contact</Link>
        
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
    </Container>
  </header>


    );
  };
  
  export default Header;