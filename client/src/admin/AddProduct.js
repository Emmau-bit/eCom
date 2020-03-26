import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { createProduct, getCategories } from './apiAdmin';

const AddProduct = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    quantity: '',
    photo: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: ''
  });

  const { user, token } = isAuthenticated();
  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData
  } = values;

  // load categories and set form data
  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data,
          formData: new FormData()
        });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = name => e => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = e => {
    e.preventDefault();
    setValues({ ...values, error: '', loading: true });

    createProduct(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          loading: false,
          createdProduct: data.name
        });
      }
    });
  };

  const newPostForm = () => (
    <form className='mb-3' onSubmit={clickSubmit}>
      <div className='text-center'>
        <h4>Image</h4>
        <div className=''>
          <label className='btn  '>
            <input
              className='form-control p-2'
              onChange={handleChange('photo')}
              type='file'
              name='photo'
              accept='image/*'
            />
          </label>
        </div>
      </div>
      <div className='row m-auto'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <div className=''>
            <label className='text-muted'>Name</label>
            <input
              onChange={handleChange('name')}
              type='text'
              className='form-control'
              value={name}
            />
          </div>

          <div className=''>
            <label className='text-muted'>Description</label>
            <textarea
              onChange={handleChange('description')}
              cols='30'
              rows='1'
              className='form-control'
              value={description}
            />
          </div>

          <div className=''>
            <label className='text-muted'>Price</label>
            <input
              onChange={handleChange('price')}
              type='number'
              className='form-control'
              value={price}
            />
          </div>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
          <div className=''>
            <label className='text-muted'>Category</label>
            <select
              onChange={handleChange('category')}
              className='form-control'
            >
              <option>Please select</option>
              {categories &&
                categories.map((c, i) => (
                  <option key={i} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          <div className=''>
            <label className='text-muted'>Shipping</label>
            <select
              onChange={handleChange('shipping')}
              className='form-control'
            >
              <option>Please select</option>
              <option value='0'>No</option>
              <option value='1'>Yes</option>
            </select>
          </div>

          <div className=''>
            <label className='text-muted'>Quantity</label>
            <input
              onChange={handleChange('quantity')}
              type='number'
              className='form-control'
              value={quantity}
            />
          </div>
        </div>
      </div>
      <div className='text-center mt-4 mb-3'>
        <button className='btn btn-outline-info '>Create Product</button>
      </div>
    </form>
  );

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: createdProduct ? '' : 'none' }}
    >
      <h2>{`${createdProduct}`} is created!</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className='alert alert-success'>
        <h2>Loading...</h2>
      </div>
    );

  const goBack = () => (
    <div className='mt-5'>
      <Link to='/admin/dashboard' style={{ color: '#ff8000' }}>
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <Layout title='' description=''>
      <div className='row w-100'>
        <div className=' container '>
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
