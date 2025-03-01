"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  created_at: string;
}

export default function AdminPage() {
  const [products] = useState<Product[]>([]);

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100">
          Product Management
        </h1>
        <Link href="/admin/products/new">
          <Button className="bg-primary text-white hover:bg-primary/80">
            <Plus className="w-5 h-5 mr-2" />
            Add Product
          </Button>
        </Link>
      </div>

      {/* Product Table */}
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4">
        <Table className="w-full border-collapse">
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead className="text-left p-3">Name</TableHead>
              <TableHead className="text-left p-3">Price</TableHead>
              <TableHead className="text-left p-3">Stock</TableHead>
              <TableHead className="text-left p-3">Created At</TableHead>
              <TableHead className="text-left p-3">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length > 0 ? (
              products.map((product) => (
                <TableRow
                  key={product.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <TableCell className="p-3">{product.name}</TableCell>
                  <TableCell className="p-3">${product.price.toFixed(2)}</TableCell>
                  <TableCell className="p-3">{product.stock}</TableCell>
                  <TableCell className="p-3">
                    {new Date(product.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="p-3">
                    <Link href={`/admin/products/${product.id}`}>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
