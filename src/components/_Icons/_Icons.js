// Vendor
import React from "react";
// Constants
import { ICONS } from "./../../constants";

/**
 * All of the SVG icons the application needs are stored here.
 *
 * The 'Icon' component binds itself to its matching `<symbol>` element found in this component.
 */
const _Icons = () => (
    /* eslint-disable max-len */
    <svg className="h-hide" xmlns="http://www.w3.org/2000/svg">
        <symbol id={ICONS.arrowSolidSmallDown} viewBox="0 0 8 4">
            <path d="M0 0l4 4 4-4" fill="currentColor" fillRule="evenodd" />
        </symbol>

        <symbol id={ICONS.cross} viewBox="0 0 16 20">
            <path
                d="M16.4.4l-.8-.8L8 7.2.4-.4l-.8.8L7.2 8l-7.6 7.6.8.8L8 8.8l7.6 7.6.8-.8L8.8 8z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </symbol>

        <symbol id={ICONS.magnifyingGlass} viewBox="0 0 32 32">
            <path
                d="M24 23.543l-4.356-4.356c.875-1.168 1.4-2.614 1.4-4.186 0-3.865-3.135-7-7-7s-7 3.135-7 7 3.133 7 7 7c1.57 0 3.017-.524 4.185-1.398l4.355 4.356L24 23.543zM9.043 15c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </symbol>
    </svg>
    /* eslint-disable max-len */
);

export default _Icons;
