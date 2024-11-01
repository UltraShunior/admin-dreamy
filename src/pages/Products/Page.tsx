import ProductsTable from "./components/ProductsTable";
import { Layout } from "@/layout";

export function ProductsPage() {
  return (
    <Layout activeRoute="Products">
      <ProductsTable />
    </Layout>
  );
}

export default ProductsPage;
