import {BusinessModel, Business} from "../models/business.model";
import {User, UserModel} from "../models/user.model";

export const createBusiness = async (
    userId: string,
    businessData?: any
): Promise<Business | null> => {
    const findUser = await UserModel.findById<User | undefined>(userId);
    if (findUser) {
        const newBusinessData = businessData ? {userId, businessData} : {userId};
        const newBusiness = new BusinessModel(newBusinessData);
        return await newBusiness.save();
    } else return null;

    // const newBusiness: Business = {
    //     businessId: "1", // יצירת id
    //     userId: userId,
    //     business: ""
    // };
    // return newBusiness;
};

export const updateBusiness = async (business: Business): Promise<Business | null> => {
    try {
        return await BusinessModel.findByIdAndUpdate(business._id, {business}, {new: true});
    } catch (error) {
        console.error("Error update business: " + error);
        return null;
    }
};
