import React from 'react';
import {me} from "../../constants/constants";
import {MyPhotoImg} from "./MyPhotoStyle";

export const MyPhoto = () => (
    <div>
        <MyPhotoImg src={me.image} alt={"me"} />
    </div>
)

export default MyPhoto;
