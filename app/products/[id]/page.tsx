// app/products/[id]/page.tsx
import Image from 'next/image';
import { products } from '@/data/products';

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={600} height={400} />
      <p>{product.description}</p>
      <p><strong>{product.price}</strong></p>
    </div>
  );
}
