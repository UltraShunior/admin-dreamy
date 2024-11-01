import {
  Cloud,
  MoreVertical,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import {
  Button,
  Checkbox,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

import category1 from "@assets/product-1.jpg";
import category2 from "@assets/product-2.jpg";
import category3 from "@assets/product-3.jpg";
import { useMemo } from "react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  sales: number;
  totalSales: number;
}

const products: Product[] = [
  {
    id: "O98327NT",
    name: "Florven",
    image: category1,
    price: 252.0,
    quantity: 46,
    sales: 387,
    totalSales: 500,
  },
  {
    id: "O98359NT",
    name: "Snövala",
    image: category2,
    price: 139.0,
    quantity: 28,
    sales: 892,
    totalSales: 1000,
  },
  {
    id: "O98383NT",
    name: "Echoes Necklace",
    image: category3,
    price: 99.0,
    quantity: 52,
    sales: 1145,
    totalSales: 2000,
  },
];

export default function ProductsTable() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(products.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return products.slice(start, end);
  }, [page, products]);

  return (
    <div className="w-full p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Billboards</h1>
        <div className="flex items-center gap-2">
          <Button variant="bordered" size="sm" className="font-normal text-sm">
            <Cloud className="w-4 h-4 text-default-400" />
            Export
          </Button>
          <Button
            size="sm"
            className="font-normal text-white text-sm bg-[#8176f2] dark:bg-indigo-800"
          >
            <Plus className="w-4 h-4" />
            Add billboard
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            placeholder="Search billboards..."
            className="max-w-md"
            startContent={<Search className="h-4 w-4 text-default-400" />}
          />
        </div>
      </div>

      <Table aria-label="Products table">
        <TableHeader>
          <TableColumn>
            <Checkbox />
          </TableColumn>
          <TableColumn>BILLBOARD</TableColumn>
          <TableColumn>PRICE</TableColumn>
          <TableColumn>QUANTITY</TableColumn>
          <TableColumn>SALES</TableColumn>
          <TableColumn> </TableColumn>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg object-cover w-10 h-10"
                  />
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-default-400">
                      ID: {product.id}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="text-sm">{product.sales} Sales</div>
                  <div className="h-2 w-32 rounded-full bg-default-100 overflow-hidden">
                    <div
                      className="h-full bg-[#8176f2] dark:bg-indigo-800"
                      style={{
                        width: `${(product.sales / product.totalSales) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Dropdown>
                  <DropdownTrigger>
                    <Button isIconOnly variant="light" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Actions">
                    <DropdownItem startContent={<Pencil className="w-4 h-4" />}>
                      Edit
                    </DropdownItem>
                    <DropdownItem
                      startContent={<Trash2 className="w-4 h-4" />}
                      className="text-danger"
                      color="danger"
                    >
                      Delete
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}
