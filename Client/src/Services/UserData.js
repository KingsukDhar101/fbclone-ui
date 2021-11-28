import axios from 'axios';

export const GetUserData = () => axios.get('/api/userdata.json');
export const GetWallData = () => axios.get('/api/walldata.json');