export const node = (horizontal,vertical) =>
{
    return {horizontal,vertical, hasKnight :false}; 
};

// THINGS TO REMEMBER :
// Each block that the knight walks, is a node
// I think each time " knight" is exist in a node, it will create another nodes