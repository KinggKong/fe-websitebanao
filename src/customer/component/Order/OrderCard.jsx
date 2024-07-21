import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border rounded-lg bg-white mb-5 transition-shadow duration-300 ease-in-out">
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

                <Grid item xs={6}>
                    <div className="flex cursor-pointer items-center">

                        <img className="w-[5rem] h-[5rem] lg:w-[7rem] lg:h-[7rem] object-cover object-top rounded-md" src="https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg" alt="Product" />
                        <div className="ml-5 space-y-1">

                            <p className="font-semibold text-gray-800">Men Slim Mid Rise Black Jeans</p>
                            <p className="opacity-70 text-xs font-semibold">Size: M</p>
                            <p className="opacity-70 text-xs font-semibold">Color: White</p>

                        </div>

                    </div>
                </Grid>

                <Grid item xs={2} className="flex items-center">
                    <p className="font-semibold text-lg">$500</p>
                </Grid>

                <Grid item xs={4} className="flex flex-col justify-center">
                    {true && <div>
                        <p className="flex items-center text-green-600 text-sm font-medium">
                            <AdjustIcon sx={{ width: "15px", height: "15px" }} className="mr-2" />
                            <span>Delivered On March 03</span>
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                            Your item has been delivered
                        </p>
                    </div>}
                    {false && <p>
                        <span>Delivered On March 03</span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard;
