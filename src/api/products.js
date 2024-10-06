// import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../lib/supabase';

export const getProducts = async () => {
  try {
    const { data, error } = await supabase.from("items").select();

    if (error) {
      console.error("Error fetching products:", error);
      // Handle the error gracefully, e.g., show an error message or retry
    }

    if (data) {
      return data;
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    // Handle unexpected errors
  }
};