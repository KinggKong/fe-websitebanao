import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className="px-5 lg:px-20 bg-gray-50 min-h-screen">
            <div>
                <h1 className="font-bold text-2xl py-7">Delivery Address</h1>
                <AddressCard />
            </div>

            <div className="py-10">
                <OrderTracker activeStep={3} />
            </div>

            <Grid container spacing={3}>
                {[1,1,1,1].map((item)=><Grid item xs={12}>
                    <div className="shadow-lg rounded-lg p-5 border bg-white flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img className="w-[5rem] h-[5rem] lg:w-[7rem] lg:h-[7rem] object-cover object-top rounded-md" src="https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg" alt="Product" />
                            <div className="space-y-1 ml-5">
                                <p className="font-semibold text-lg text-gray-800">Men Slim Mid Rise Black Jeans</p>
                                <p className="space-x-5 text-xs font-semibold text-gray-600"><span>Color: Pink</span><span>Size: M</span></p>
                                <p className="text-sm text-gray-700">Seller: Diana</p>
                                <p className="text-lg font-semibold text-gray-800">$500</p>
                            </div>
                        </div>

                        <Box sx={{ color: deepPurple[500] }} className="flex items-center space-x-2 cursor-pointer">
                            <StarBorderIcon sx={{ fontSize: "2rem" }} />
                            <span className="text-lg font-medium">Rate & Review Product</span>
                        </Box>
                    </div>
                </Grid>)}
            </Grid>
        </div>
    )
}

export default OrderDetails;
