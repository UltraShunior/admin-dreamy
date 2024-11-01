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
import { useState } from "react";
import { useMemo } from "react";

const billboards: Billboard[] = [
  {
    id: "O98327NT",
    name: "Billboard 1",
    image: category1,
  },
  {
    id: "O98328NT",
    name: "Billboard 2",
    image: category2,
  },
  {
    id: "O98329NT",
    name: "Billboard 3",
    image: category3,
  },
];

interface Billboard {
  id: string;
  name: string;
  image: string;
}

export default function BillboardTable() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(billboards.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return billboards.slice(start, end);
  }, [page, billboards]);

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

      <Table aria-label="Billboards table">
        <TableHeader>
          <TableColumn>
            <Checkbox />
          </TableColumn>
          <TableColumn>BILLBOARD</TableColumn>
          <TableColumn> </TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((billboard) => (
            <TableRow key={billboard.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={billboard.image}
                    alt={billboard.name}
                    className="rounded-lg object-cover w-20 h-10"
                  />
                  <div>
                    <div className="font-medium">{billboard.name}</div>
                    <div className="text-sm text-default-400">
                      ID: {billboard.id}
                    </div>
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
