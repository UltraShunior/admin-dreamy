import ProductsTable from "./components/ProductsTable";
import { Layout } from "@/layout";

export function ProductsPage() {
  return (
    <Layout activeRoute="Products">
      <div className="w-[70%] h-full">
        <ProductsTable />
      </div>
    </Layout>
  );
}

export default ProductsPage;
