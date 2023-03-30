export interface IFStudioState {
  hasUnsavedChanges?: boolean;
  card: IFCard;
}

interface IFCard {
  displayName: string;
  displayTitle: string;
  orgName: string;
}

export type ACTION_TYPE =
  | { type: "SET_DISPLAY_NAME"; displayName: string }
  | { type: "SET_DISPLAY_TITLE"; displayTitle: string }
  | { type: "SET_ORG_NAME"; orgName: string }
  | { type: "SET_HAS_UNSAVED_CHANGES"; hasUnsavedChanges: boolean };
export const appReducer = (state: IFStudioState, action: ACTION_TYPE) => {
  switch (action.type) {
    case "SET_DISPLAY_NAME":
      return {
        ...state,
        card: {
          ...state.card,
          displayName: action.displayName,
        },
      };

    case "SET_DISPLAY_TITLE":
      return {
        ...state,
        card: {
          ...state.card,
          displayTitle: action.displayTitle,
        },
      };
    case "SET_ORG_NAME":
      return {
        ...state,
        card: {
          ...state.card,
          orgName: action.orgName,
        },
      };
    case "SET_HAS_UNSAVED_CHANGES":
      return {
        ...state,
        hasUnsavedChanges: action.hasUnsavedChanges,
      };

    default:
      return state;
  }
};
