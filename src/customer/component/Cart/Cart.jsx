import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const handleCheckout=()=>{
        navigate("/checkout?step=2")
    }
    return (
        <div>

            <div className="lg:grid grid-cols-3 lg:px-16 relative">

                <div className="col-span-2">
                    {[1,1,1,1].map((item)=><CartItem></CartItem>)}
                </div>

                <div className="px-5 sticky top-0 h-auto mt-5 lg:mt-0">
                    <div className="border rounded-lg shadow-md p-5 bg-white">
                        <p className="uppercase font-bold opacity-70 pb-4 text-lg">
                            Price Details
                        </p>
                        <hr />
                        <div className="space-y-3 font-medium mb-10 text-gray-700">
                            <div className="flex justify-between pt-3">
                                <span>Price</span>
                                <span>$345</span>
                            </div>
                            <div className="flex justify-between pt-3">
                                <span>Discount</span>
                                <span className="text-green-600">-$345</span>
                            </div>
                            <div className="flex justify-between pt-3">
                                <span>Delivery</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between pt-3 font-bold">
                                <span>Total Amount</span>
                                <span className="text-green-600">$9345</span>
                            </div>
                        </div>
                        <Button 
                            onClick={handleCheckout}
                            variant="contained" 
                            className="w-full mt-5"  
                            sx={{
                                px: "2.5rem",
                                py: ".7rem",
                                bgcolor: "#9155fd",
                                '&:hover': {
                                    bgcolor: "#7d4bf4",
                                },
                                color: "#fff",
                                fontWeight: "bold",
                                textTransform: "uppercase"
                            }}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart;