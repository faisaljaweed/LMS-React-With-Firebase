import {  ref, set, push, update, remove, get,  } from "firebase/database";
import { database } from "./fireconfig";
// Add Data in firebase
export const addData = async (path: string, data: any) => {
    try {
      const newRef = push(ref(database, path));
      await set(newRef, data);
      console.log("Data added successfully");
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };


// Get Data in firebase
export const getData = async (path: string) => {
    try {
      const snapshot = await get(ref(database, path));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error getting data: ", error);
    }
  };


// Edit Data in firebase

export const updateData = async (path: string, data: any) => {
    try {
      await update(ref(database, path), data);
      console.log("Data updated successfully");
    } catch (error) {
      console.error("Error updating data: ", error);
    }
  };



// Delete Data in firebase


export const deleteData = async (path: string) => {
    try {
      await remove(ref(database, path));
      console.log("Data deleted successfully");
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };
