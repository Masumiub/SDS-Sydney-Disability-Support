import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://server-kappa-eight-95.vercel.app`
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;