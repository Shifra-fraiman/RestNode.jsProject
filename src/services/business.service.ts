import {BusinessModel, Business} from "../models/business.model";
import {User, UserModel} from "../models/user.model";

export const createBusiness = async (
    userId: string,
    businessId: string,
    businessData?: any
): Promise<Business | null> => {
    const findUser = await UserModel.findOne<User | undefined>({userId});
    if (findUser) {
        const newBusinessData = businessData ? {businessId, userId, businessData} : {businessId, userId};
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
