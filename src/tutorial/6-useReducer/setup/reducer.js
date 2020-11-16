// reducer function
export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        const people = [...state.people, action.payload];
        return {
          ...state,
          people,
          isModalOpen: true,
          modalContent: "item added",
        };
  
      case "NO_VALUE": 
        return {
          ...state,
          isModalOpen: true,
          modalContent: 'please enter value'
        }
  
      case "REMOVE_ITEM": {
        const people = [...state.people]
        const newPeople = people.filter(p => p.id !== action.payload)
        return {
          ...state,
          people: newPeople,
          isModalOpen: true,
          modalContent: 'Item removed'
        }
      }
  
      case "CLOSE_MODAL":
        return {
          ...state,
          isModalOpen: false
        }
      default:
        return state;
    }
  };
  