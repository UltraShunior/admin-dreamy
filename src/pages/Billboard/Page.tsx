import { Layout } from "../../layout";
import BillboardTable from "./components/BillboardTable";

export function BillboardPage() {
  return (
    <Layout activeRoute="Billboard">
      <div className="min-h-screen w-[80%] mx-auto p-6">
        <BillboardTable />
      </div>
    </Layout>
  );
}

export default BillboardPage;
