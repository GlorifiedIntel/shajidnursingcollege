
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
        <Link href="/"><a className="text-lg font-semibold">Home</a></Link>
        <Link href="/about"><a className="text-lg font-semibold">About</a></Link>
        <Link href="/services"><a className="text-lg font-semibold">Admissions</a></Link>
        <Link href="/services"><a className="text-lg font-semibold">Student Life</a></Link>
        <Link href="/contact"><a className="text-lg font-semibold">Contact</a></Link>
        
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