```javascript
//pages/index.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // If the component mounts after returning from the about page,
    // force a full re-render to ensure data fetching occurs again.
    if (router.asPath === '/') {
      router.replace('/'); 
    }
  }, [router]);

  return (
    <div>
      <h1>Next.js App</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link href="/">
        <a>Go to Home Page</a>
      </Link> 
    </div>
  );
}
```