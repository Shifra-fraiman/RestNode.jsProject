import {Business} from "../models/business.model";

export const createBusiness = async (userId: string, business: any): Promise<Business | undefined> => {
    const newBusiness: Business = {
        id: "1", // יצירת id
        userId: userId,
    };
    return newBusiness;
};

export const updateBusiness = async (id: string, business: any): Promise<Business> => {
    //מציאת העסק הנכון לפי id
    //שינוי העסק לפי העסק החדש
    const newBusiness: Business = {
        id: id,
        userId: business.userId,
    };
    return newBusiness;
};

// module.exports = {
//     createBusiness,
// };
