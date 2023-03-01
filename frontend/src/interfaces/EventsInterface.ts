import Event from "./EventSliceInterface";
export interface eventsState {
  data: Event[];
  isLoading: boolean;
  hasError: boolean;
}
