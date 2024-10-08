import { Height } from "@mui/icons-material";
import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>

                        </Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p className="font-semibold text-lg">Raam</p>
                            <p className="opacity-70">Aprill 5 2024</p>
                        </div>
                    </div>

                    <Rating value={4.5} name="half-rating" readOnly precision={.5}></Rating>
                    <p>Lorem ipsum dolor, sit amet consectaertur adipisingcing edlit. Architecto, dolor, molilita mescient iventeor praventium cumque explicabo sit comodi, amet , olut nesciunt invenetore prasennium perfereddis cumque ?</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductReviewCard;