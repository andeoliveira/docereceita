import { RootStackParamListType } from "../routes/RootStackParamListType";

export interface SimpleListItem {
    nextScreenName?: keyof RootStackParamListType;
    nextScreenTitle?: string;
    itemDetailTitle?: string;
    itemDescription: string;
    itemLeft: string;
    itemRight: string;
    itemDetailObject: any;
    itemThumbnailUrl: string;
    itemBottom: string;
    itemKey: string
}