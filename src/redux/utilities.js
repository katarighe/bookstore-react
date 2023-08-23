import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appID = '';

export const addBook = createAsyncThunk('Books/addBook', async (book) => {
  try {
    await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`, book);
  } catch (e) {
    throw new Error(e);
  }
  return book;
});

export const deleteBook = createAsyncThunk('Books/deleteBook', async (bookID) => {
  try {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books/${bookID}`);
  } catch (e) {
    throw new Error(e);
  }
  return bookID;
});

export const getBooks = createAsyncThunk('Books/getBooks', async () => {
  const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books`);
  const books = Object.entries(response.data).map((item) => (
    {
      ...item[1][0],
      item_id: item[0],
    }
  ));
  return books;
});
