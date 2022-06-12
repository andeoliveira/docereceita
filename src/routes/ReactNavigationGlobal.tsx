import { RootStackParamListType } from "./RootStackParamListType";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamListType {}
    }
}