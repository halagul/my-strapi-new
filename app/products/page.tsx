// app/products/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <div>
      <h1>Our Products</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
            <Image
              src={p.image}
              alt={p.name}
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
            />
            <h2>{p.name}</h2>
            <p>{p.price}</p>
            <Link href={`/products/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
