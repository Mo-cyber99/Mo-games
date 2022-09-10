import React from "react";
import { Button } from "@mui/material";
import { deleteCommentByID } from "../utils/API";

export const DeleteComments = ({ comment_id }) => {
    const deleteComments = () => {
        deleteCommentByID(comment_id).catch((err) => {
            console.log(err);
        });
    };
    return (
        <Button onClick={() => deleteComments()} color='error' variant="contained">
            Delete
        </Button>
    );
}