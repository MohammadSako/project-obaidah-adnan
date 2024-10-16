// eslint-disable-next-line @typescript-eslint/no-require-imports
const { parseCookies } = require('nookies');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const isServer = require('./isServer');

module.exports = (ctx) => {
    if (isServer()) {
        return parseCookies(ctx);
    } else {
        return parseCookies();
    }
};


// import { parseCookies } from 'nookies';
// import isServer from './isServer';

// export default (ctx) => {
//     if (isServer()) {
//         return parseCookies(ctx);
//     } else {
//         return parseCookies();
//     }
// };
