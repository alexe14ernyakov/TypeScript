"use strict";
function distance(P1OrX1, P2OrY1, x2, y2) {
    if (x2 !== undefined && y2 !== undefined && typeof P1OrX1 === 'number' && typeof P2OrY1 === 'number') {
        return Math.sqrt((x2 - P1OrX1) ** 2 + (y2 - P2OrY1) ** 2);
    }
    else if (typeof P1OrX1 === 'object' && typeof P2OrY1 === 'object' && x2 === undefined && y2 === undefined) {
        return Math.sqrt((P1OrX1.x - P2OrY1.x) ** 2 + (P1OrX1.y - P2OrY1.y) ** 2);
    }
    else {
        throw new Error('Unknown arguments set');
    }
}
