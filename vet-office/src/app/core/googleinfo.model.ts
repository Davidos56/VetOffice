export interface GoogleInfo {
  name: string;
  formatted_address: string;
  weekday_text: WeekDay [];
  formatted_phone_number: string;
}

export interface WeekDay{
  day:string;
  hours: string;
}

