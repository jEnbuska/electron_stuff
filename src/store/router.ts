import {LocationActionPayload} from "connected-react-router";

export type LocationChange = { type: '@@router/LOCATION_CHANGE', payload: LocationActionPayload }
export const LOCATION_CHANGE: LocationChange['type'] = '@@router/LOCATION_CHANGE';

export type Actions = LocationChange;
