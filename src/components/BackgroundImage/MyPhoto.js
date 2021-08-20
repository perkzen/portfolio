import React from 'react';

import {MyPhotoImg} from "./MyPhotoStyle";
import me from "./116690176_920160858461013_8515392645483699071_n.jpg"

export const MyPhoto = () => (
    <div>
        <MyPhotoImg src={me} alt={"me"} />
    </div>
)

export default MyPhoto;
