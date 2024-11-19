import axios from "axios";

const apiBaseUrl = "https://gkiltdd.onrender.com/api/trips";

export const fetchTrips = async () => {
  try {
    const response = await axios.get(apiBaseUrl);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu trips:", error);
    throw error;
  }
};

export const createTrip = async (tripData) => {
  try {
    const response = await axios.post(apiBaseUrl, tripData);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi thêm trip:", error);
    throw error;
  }
};

export const updateTrip = async (tripId, tripData) => {
  try {
    const response = await axios.put(`${apiBaseUrl}/${tripId}`, tripData);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi sửa trip:", error);
    throw error;
  }
};

export const deleteTrip = async (tripId) => {
  try {
    const response = await axios.delete(`${apiBaseUrl}/${tripId}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi xóa trip:", error);
    throw error;
  }
};
