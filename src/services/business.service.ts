import {BusinessModel, Business} from "../models/business.model";

export const createBusiness = async (userId: string, businessId: string): Promise<Business | null> => {
    const newBusiness = new BusinessModel({businessId, userId});
    return await newBusiness.save();
    // const newBusiness: Business = {
    //     businessId: "1", // יצירת id
    //     userId: userId,
    //     business: ""
    // };
    // return newBusiness;
};

export const updateBusiness = async (id: string, business: Business): Promise<Business | null> => {
    try {
        return await BusinessModel.findByIdAndUpdate(id, {business}, {new: true});
    } catch (error) {
        console.error("Error update business: " + error);
        return null;
    }
};

// module.exports = {
//     createBusiness,
// };
