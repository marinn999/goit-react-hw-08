import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://671fa990e7a5792f052f1de0.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchData",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
