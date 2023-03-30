import {
  createContext,
  type Dispatch,
  useContext,
  useMemo,
  useReducer,
} from "react";
import {
  type IFStudioState,
  appReducer,
  type ACTION_TYPE,
} from "./studioReducer";

type Actions = Dispatch<ACTION_TYPE>;
type StudioActionsType = ReturnType<typeof actions>;

// Actions for the app
const actions = (dispatch: Actions) => ({
  setDisplayName: (displayName: string) => {
    dispatch({ type: "SET_DISPLAY_NAME", displayName });
  },
  setDisplayTitle: (displayTitle: string) => {
    dispatch({ type: "SET_DISPLAY_TITLE", displayTitle });
  },
  setOrgName: (orgName: string) => {
    dispatch({ type: "SET_ORG_NAME", orgName });
  },
  setHasUnsavedChanges: (hasUnsavedChanges: boolean) => {
    dispatch({ type: "SET_HAS_UNSAVED_CHANGES", hasUnsavedChanges });
  },
});

const StudioContext = createContext<IFStudioState>({} as any);
const StudioActionsContext = createContext<StudioActionsType>({} as any);

interface IFProps {
  children: React.ReactNode;
}

const initialState: IFStudioState = {
  card: {
    displayName: "",
    displayTitle: "",
    orgName: "",
  },
};

// Provider for the app
export const StudioProvider = ({ children }: IFProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const appActions = useMemo(() => actions(dispatch), []);

  return (
    <StudioContext.Provider value={state}>
      <StudioActionsContext.Provider value={appActions}>
        {children}
      </StudioActionsContext.Provider>
    </StudioContext.Provider>
  );
};

export const useStudioContext = () => {
  const state = useContext(StudioContext);
  return state;
};

export const useStudioActions = () => {
  const dispatch = useContext(StudioActionsContext);
  return dispatch;
};
