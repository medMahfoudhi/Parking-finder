import { createSlice } from "@reduxjs/toolkit";
export const BookplaceSlice = createSlice({
  name: "bookplace",
  initialState: {
    value: {
      CarType: "",
      ParkingName: "",
      Adress: "",
      ParkingSpot: "",
      Date: "",
      Duration: 2000,
      User_id: "",
      ParkiCoins: 1000,
      status: "Ongoing",
      arrivaltime: 0,
      exitTime: 0,
    },
  },
  reducers: {
    ParkingNameAndAdress: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { ParkingNameAndAdress } = BookplaceSlice.actions;
export default BookplaceSlice.reducer;
