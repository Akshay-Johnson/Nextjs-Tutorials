'use client';

import {usePathname} from 'next/navigation';

export default function notFound() {
  const pathname = usePathname();
  const productid = pathname.split('/')[2];
  const reviewid = pathname.split('/')[4];

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>404 - Review {reviewid} Not Found for Product {productid}</h1>
    </div>
  );
}