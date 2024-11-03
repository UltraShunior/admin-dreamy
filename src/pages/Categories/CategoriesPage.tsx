import { Layout } from "@/layout";
import CategoriesTable from "./components/CategoriesTable";

export function CategoriesPage() {
  return (
    <Layout activeRoute="Categories">
      <div className="w-[70%] h-full">
        <CategoriesTable />
      </div>
    </Layout>
  );
}

export default CategoriesPage;
