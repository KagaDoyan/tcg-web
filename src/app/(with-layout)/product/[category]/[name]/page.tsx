// app/product/[name]/page.tsx

import ProductPage from "@/components/product/productPage";

interface PageProps {
  params: { name: string, category: string };
}

export default async function Page({ params }: PageProps) {
  const { name, category } = await params;
  const decode_name = decodeURIComponent(name);
  const decodedCategory = decodeURIComponent(category);

  return (
    <div>
      <ProductPage name={decode_name} category={decodedCategory} />
    </div>
  );
}
