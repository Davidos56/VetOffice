export interface FacebookPost {
    id:string;
    title: string;
    message: string;
    created_time: string;
    full_picture: string;
    formatted_date: string | null;
    created_date: Date | null;
    
}