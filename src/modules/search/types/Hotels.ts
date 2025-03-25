

export type SearchHotelsResponse = {
  data: SearchHotels[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}


export interface SearchHotels {
    id?:          number;
    name?:        string;
    description?: string;
    address?:     string;
    latitude?:    number;
    longitude?:   number;
    star?:        number;
    city?:        City;
    facilities?:  string[];
    images?:      string[];
    policy?:      string;
    rooms?:       Room[];
}

export interface City {
    id?:      number;
    name?:    string;
    country?: string;
}

export interface Room {
    id?:                    number;
    name?:                  string;
    size?:                  number;
    facilities?:            string[];
    images?:                string[];
    is_breakfast_included?: boolean;
    guest_capacity?:        number;
    bed_type?:              string;
    price?:                 number;
    total_rooms?:           number;
    available_rooms?:       number;
}
