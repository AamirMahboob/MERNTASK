'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, updateProduct, deleteProduct } from '../../store/productsSlice';
import toast from 'react-hot-toast';
import DataTable from '../../components/DataTable';
import Modal from '../../components/Modal';
import StatusBadge from '../../components/StatusBadge';
import Button from '../../components/Button';

const ProductInventoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: ''
  });

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Books',
    'Toys',
    'Accessories',
  ];

  const columns = [
    { key: 'name', title: 'Product Name' },
    { key: 'price', title: 'Price' },
    { key: 'category', title: 'Category' },
    { key: 'actions', title: 'Actions' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      id: editingProduct?.id || Date.now()
    };

    if (editingProduct) {
      dispatch(updateProduct(productData));
      toast.success('Product updated successfully');
    } else {
      dispatch(addProduct(productData));
      toast.success('Product added successfully');
    }

    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData({ name: '', price: '', category: '' });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category: product.category
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
      toast.success('Product deleted successfully');
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Product Inventory</h1>
          <p className="text-gray-600">Manage your products</p>
        </div>
        <Button
          onClick={() => {
            setEditingProduct(null);
            setFormData({ name: '', price: '', category: '' });
            setIsModalOpen(true);
          }}
          variant="primary"
        >
          <span style={{
            color: "white"
          }}>Add Product</span>
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={products}
        renderRow={(product) => (
          <tr key={product.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {product.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ${parseFloat(product.price).toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <StatusBadge status={product.category} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2 flex gap-4">
              <Button
                onClick={() => handleEdit(product)}
                variant="secondary"
                size="sm"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(product.id)}
                variant="danger"
                size="sm"
              >
                Delete
              </Button>
            </td>
          </tr>
        )}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
          setFormData({ name: '', price: '', category: '' });
        }}
        title={editingProduct ? 'Edit Product' : 'Add Product'}
        footer={
          <div
            style={{
              display: 'flex', gap: '10px'
            }}
          >
            <Button
              onClick={() => setIsModalOpen(false)}
              variant="outline"

            >
              <span
                style={{
                  color: "red"

                }}
              >Cancel</span>
            </Button>
            <Button
              type="submit"
              form="productForm"
              variant="primary"


            >
              <span
                style={{
                  color: "white"

                }}
              >

                {editingProduct ? 'Update' : 'Add'} Product
              </span>
            </Button>
          </div>
        }
      >
        <form id="productForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              required
               style={{
                color:'black'
              }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
              required
               style={{
                color:'black'
              }}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              style={{
                color:'black'
              }}

            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProductInventoryPage;