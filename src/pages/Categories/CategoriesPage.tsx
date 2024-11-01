import { Layout } from "@/layout";
import CategoriesTable from "./components/CategoriesTable";

export function CategoriesPage() {
  return (
    <Layout activeRoute="Categories">
      <CategoriesTable />
    </Layout>
  );
}

export default CategoriesPage;
