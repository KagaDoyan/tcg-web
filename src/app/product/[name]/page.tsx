// app/product/[name]/page.tsx

import ProductPage from "@/components/product/productPage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PageProps {
  params: { name: string };
}

export default function Page({ params }: PageProps) {
  const { name } = params;
  const decode_name = decodeURIComponent(name);

  return (
    <div>
      <ProductPage name={decode_name} />
    </div>
  );
}
