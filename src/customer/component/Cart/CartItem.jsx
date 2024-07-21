import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-lg bg-white mb-5">
            <div className="flex items-center">

                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top rounded-md" src="https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg" alt="" />
                </div>

                <div className="ml-5 space-y-2 flex-grow">

                    <p className="font-semibold text-lg">Men Slim Mid Rise Black Jeans</p>
                    <p className="opacity-70">Size: L, White</p>
                    <p className="opacity-70 mt-1">Seller: Crishtaiyo 2fashion</p>

                    <div className="flex space-x-5 items-center text-gray-900 pt-4">
                        <p className='font-semibold text-xl'>$99</p>
                        <p className='opacity-50 line-through'>$100</p>
                        <p className='text-green-600 font-semibold'>5% off</p>
                    </div>

                </div>

            </div>

            <div className="lg:flex items-center lg:space-x-10 pt-4 justify-between">

                <div className="flex items-center space-x-2">

                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm text-lg">3</span>
                    <IconButton sx={{ color: "RGB(145 85 253)" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>

                <div>
                    <Button sx={{ color: "RGB(145 85 253)", mt: { xs: 2, lg: 0 } }}>Remove</Button>
                </div>

            </div>
        </div>
    )
}

export default CartItem;
