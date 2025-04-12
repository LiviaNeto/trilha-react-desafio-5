import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://sspupurkokggvyaexrrj.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcHVwdXJrb2tnZ3Z5YWV4cnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMzYwNTIsImV4cCI6MjA1OTkxMjA1Mn0.GXnAfW_wymfrEw2d1sT9pNeNP5PIhmU8DSsAJ00uz6g",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcHVwdXJrb2tnZ3Z5YWV4cnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMzYwNTIsImV4cCI6MjA1OTkxMjA1Mn0.GXnAfW_wymfrEw2d1sT9pNeNP5PIhmU8DSsAJ00uz6g"
    }
})