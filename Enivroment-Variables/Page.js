
import { API_BASE_URL } from "@/config/constants";
export default function Home() {


console.log(process.env.SERVER_PASSWORD);
console.log(process.env.DB_PASSWORD);
  return (
    <div >

      <p >  Environment variables in Next.js 13.4.<br></br><br></br>
        how to access the Environment variables in Next.JS, we are conditionally check where are we ?.
        when you off your server and then make build by using "npm run build"  then start your server and you will have on Production Mode.
     <br></br>
      we created some Environment variables in "".env.local" file
      </p>



      {
        process.env.NODE_ENV=="development"?
        <h2>your are on Development Mode</h2>
        :
        <h2>you are on Production Mode</h2>
      }




      <br></br>
      <p>we are fetching Api Base URl by conditionally</p><br></br>
      {API_BASE_URL}
    </div>
  );
}






