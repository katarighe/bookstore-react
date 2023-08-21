const CHECK_CATEGORY = 'bookstore/categories/check-status';
const initalState = [];
const categoriesReducer = (state = initalState, action) => {
    switch (action.type) {
        case CHECK_CATEGORY:
            return ['Under construction'];
            default:
                return state;
    }
};

export const checkAction = () => ({
    type: CHECK_CATEGORY,
});

export default categoriesReducer;